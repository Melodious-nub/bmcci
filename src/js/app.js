/* ==========================================================================
   BMCCI MASTER LOGIC ROUTER (APP.JS)
   ========================================================================== */

import { initNavigation } from './navigation.js';
import { initAllAnimations } from './animations.js';
import { initUIComponents } from './components.js';

// Import Swiper components & CSS for event sliders
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Import ECharts library
import * as echarts from 'echarts';

import { 
  createIcons, 
  ChevronDown, 
  Search, 
  Menu, 
  X, 
  Globe, 
  ArrowRight, 
  Building2, 
  Calendar, 
  FileText, 
  TrendingUp, 
  Users, 
  Check, 
  ChevronRight, 
  Info,
  ExternalLink,
  MapPin,
  Mail,
  Phone,
  Clock,
  Download,
  AlertCircle,
  Briefcase
} from 'lucide';

// Initialize core features on DOM content load
document.addEventListener('DOMContentLoaded', () => {
  console.log('[BMCCI Gateway] Core architecture loaded.');

  // 1. Load navigation handlers
  initNavigation();

  // 2. Load UI component listeners (Modals, Tabs, Dropdowns)
  initUIComponents();

  // 3. Initialize dynamic Lucide Outline Icons globally
  createIcons({
    icons: {
      ChevronDown,
      Search,
      Menu,
      X,
      Globe,
      ArrowRight,
      Building2,
      Calendar,
      FileText,
      TrendingUp,
      Users,
      Check,
      ChevronRight,
      Info,
      ExternalLink,
      MapPin,
      Mail,
      Phone,
      Clock,
      Download,
      AlertCircle,
      Briefcase
    }
  });

  // 4. Initialize GSAP and Lenis Animations
  // Wrapped in a try-catch in case animation libraries have loading delays or issues
  try {
    initAllAnimations();
  } catch (err) {
    console.warn('[BMCCI Gateway] Animation engine failed to initialize: ', err);
  }

  // 5. Initialize Swiper Event Slider (Horizontal slide-through)
  try {
    const swiperEl = document.getElementById('event-swiper');
    if (swiperEl) {
      new Swiper('#event-swiper', {
        modules: [Navigation],
        slidesPerView: 'auto',
        spaceBetween: 24,
        loop: false,
        navigation: {
          nextEl: '#event-slider-next',
          prevEl: '#event-slider-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 16
          },
          640: {
            slidesPerView: 'auto',
            spaceBetween: 24
          }
        }
      });
    }
  } catch (err) {
    console.warn('[BMCCI Gateway] Swiper initialization failed: ', err);
  }

  // 6. Initialize ECharts Bilateral Trade Charts (Import & Export share)
  try {
    const exportChartEl = document.getElementById('export-chart');
    const importChartEl = document.getElementById('import-chart');
    
    if (exportChartEl) {
      const exportChart = echarts.init(exportChartEl);
      exportChart.setOption({
        tooltip: { trigger: 'item' },
        legend: { bottom: '0%', left: 'center', textStyle: { color: '#64748b', fontSize: 10 } },
        series: [
          {
            name: 'Export Share',
            type: 'pie',
            radius: ['45%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: { borderRadius: 8, borderColor: '#fff', borderWidth: 2 },
            label: { show: false, position: 'center' },
            emphasis: {
              label: { show: true, fontSize: 13, fontWeight: 'bold' }
            },
            labelLine: { show: false },
            data: [
              { value: 84, name: 'Ready-Made Garments', itemStyle: { color: '#006a4e' } },
              { value: 6, name: 'Agricultural Crops', itemStyle: { color: '#0033a0' } },
              { value: 4, name: 'Leather Goods', itemStyle: { color: '#d4af37' } },
              { value: 3, name: 'Frozen Seafood', itemStyle: { color: '#64748b' } },
              { value: 3, name: 'Others', itemStyle: { color: '#cbd5e1' } }
            ]
          }
        ]
      });
      window.addEventListener('resize', () => exportChart.resize());
    }

    if (importChartEl) {
      const importChart = echarts.init(importChartEl);
      importChart.setOption({
        tooltip: { trigger: 'item' },
        legend: { bottom: '0%', left: 'center', textStyle: { color: '#64748b', fontSize: 10 } },
        series: [
          {
            name: 'Import Share',
            type: 'pie',
            radius: ['45%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: { borderRadius: 8, borderColor: '#fff', borderWidth: 2 },
            label: { show: false, position: 'center' },
            emphasis: {
              label: { show: true, fontSize: 13, fontWeight: 'bold' }
            },
            labelLine: { show: false },
            data: [
              { value: 34, name: 'Refined Petroleum', itemStyle: { color: '#0033a0' } },
              { value: 24, name: 'Electronics & Chips', itemStyle: { color: '#006a4e' } },
              { value: 18, name: 'Palm Oil Cargo', itemStyle: { color: '#d4af37' } },
              { value: 14, name: 'Heavy Machinery', itemStyle: { color: '#64748b' } },
              { value: 10, name: 'Raw Chemicals', itemStyle: { color: '#cbd5e1' } }
            ]
          }
        ]
      });
      window.addEventListener('resize', () => importChart.resize());
    }

    // 7. Initialize GDP Growth trends line chart
    const gdpTrendEl = document.getElementById('gdp-trend-chart');
    if (gdpTrendEl) {
      const gdpChart = echarts.init(gdpTrendEl);
      gdpChart.setOption({
        tooltip: { trigger: 'axis' },
        legend: { data: ['Bangladesh', 'Malaysia'], textStyle: { color: '#64748b' } },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2020', '2021', '2022', '2023', '2024', '2025', '2026 (Est)'],
          axisLabel: { color: '#64748b' }
        },
        yAxis: {
          type: 'value',
          axisLabel: { formatter: '{value}%', color: '#64748b' }
        },
        series: [
          {
            name: 'Bangladesh',
            type: 'line',
            data: [3.5, 6.9, 7.1, 6.0, 6.2, 6.5, 6.8],
            itemStyle: { color: '#006a4e' },
            lineStyle: { width: 3 }
          },
          {
            name: 'Malaysia',
            type: 'line',
            data: [-5.6, 3.1, 8.7, 3.7, 4.0, 4.1, 4.2],
            itemStyle: { color: '#0033a0' },
            lineStyle: { width: 3 }
          }
        ]
      });
      window.addEventListener('resize', () => gdpChart.resize());
    }

    // 8. Initialize FDI Inflow area chart
    const fdiTrendEl = document.getElementById('fdi-trend-chart');
    if (fdiTrendEl) {
      const fdiChart = echarts.init(fdiTrendEl);
      fdiChart.setOption({
        tooltip: { trigger: 'axis' },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2021', '2022', '2023', '2024', '2025', '2026 (Est)'],
          axisLabel: { color: '#64748b' }
        },
        yAxis: {
          type: 'value',
          axisLabel: { formatter: '${value}M', color: '#64748b' }
        },
        series: [
          {
            name: 'FDI Inflow',
            type: 'line',
            smooth: true,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(0, 106, 78, 0.3)' },
                { offset: 1, color: 'rgba(0, 106, 78, 0.0)' }
              ])
            },
            data: [320, 350, 380, 395, 412, 430],
            itemStyle: { color: '#006a4e' },
            lineStyle: { width: 3 }
          }
        ]
      });
      window.addEventListener('resize', () => fdiChart.resize());
    }
  } catch (err) {
    console.warn('[BMCCI Gateway] ECharts initialization failed: ', err);
  }

  // 9. Multi-Step Event Registration Form Handler
  const initRegistrationForm = () => {
    const modal = document.getElementById('registration-modal');
    if (!modal) return;

    const steps = modal.querySelectorAll('[data-register-step]');
    const progressLine = modal.querySelector('#register-progress-line');
    const stepIndicators = modal.querySelectorAll('.step-indicator');
    const btnNext = modal.querySelector('#btn-register-next');
    const btnPrev = modal.querySelector('#btn-register-prev');
    const btnSubmit = modal.querySelector('#btn-register-submit');
    const form = modal.querySelector('form');
    
    let currentStep = 1;
    
    const updateStepView = () => {
      steps.forEach(step => {
        const stepNum = parseInt(step.getAttribute('data-register-step'));
        if (stepNum === currentStep) {
          step.classList.remove('hidden');
          step.classList.add('block');
        } else {
          step.classList.add('hidden');
          step.classList.remove('block');
        }
      });

      // Update progress indicators
      stepIndicators.forEach((ind, idx) => {
        if (idx + 1 <= currentStep && currentStep < 4) {
          ind.classList.add('bg-brand-green', 'text-white');
          ind.classList.remove('bg-neutral-border', 'text-text-muted');
        } else if (currentStep === 4) {
          // Complete state
          ind.classList.add('bg-brand-green', 'text-white');
          ind.classList.remove('bg-neutral-border', 'text-text-muted');
        } else {
          ind.classList.remove('bg-brand-green', 'text-white');
          ind.classList.add('bg-neutral-border', 'text-text-muted');
        }
      });

      // Progress bar width
      if (progressLine) {
        let pct = 0;
        if (currentStep === 2) pct = 50;
        if (currentStep >= 3) pct = 100;
        progressLine.style.width = `${pct}%`;
      }

      // Toggle button visibilities
      if (currentStep === 1) {
        btnPrev?.classList.add('invisible');
      } else {
        btnPrev?.classList.remove('invisible');
      }

      if (currentStep === 3) {
        btnNext?.classList.add('hidden');
        btnSubmit?.classList.remove('hidden');
      } else if (currentStep === 4) {
        // Confirmation screen: hide navigation completely
        btnPrev?.classList.add('hidden');
        btnNext?.classList.add('hidden');
        btnSubmit?.classList.add('hidden');
      } else {
        btnPrev?.classList.remove('hidden');
        btnNext?.classList.remove('hidden');
        btnSubmit?.classList.add('hidden');
      }
    };

    btnNext?.addEventListener('click', () => {
      // Validate inputs for current step before moving
      const activeInputs = modal.querySelector(`[data-register-step="${currentStep}"]`).querySelectorAll('input, select');
      let valid = true;
      activeInputs.forEach(input => {
        if (!input.checkValidity()) {
          input.reportValidity();
          valid = false;
        }
      });

      if (valid && currentStep < 3) {
        currentStep++;
        updateStepView();
      }
    });

    btnPrev?.addEventListener('click', () => {
      if (currentStep > 1 && currentStep < 4) {
        currentStep--;
        updateStepView();
      }
    });

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      currentStep = 4; // Move to success view
      updateStepView();
    });
    
    // Reset form states on close
    const closeTriggers = modal.querySelectorAll('[data-modal-close]');
    closeTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        setTimeout(() => {
          currentStep = 1;
          updateStepView();
          form?.reset();
        }, 300);
      });
    });
    
    updateStepView();
  };
  initRegistrationForm();

  // 10. Directory Card Profile Modal Mapper (Event delegation)
  const initDirectoryModalMapper = () => {
    const modal = document.getElementById('member-detail-modal');
    if (!modal) return;
    
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-modal-open="member-detail-modal"]');
      if (!trigger) return;
      
      const card = trigger.closest('.group');
      if (!card) return;
      
      const title = card.querySelector('h3')?.textContent.trim();
      const desc = card.querySelector('p')?.textContent.trim();
      
      const industrySpan = card.querySelector('span[class*="text-brand-blue"]') || card.querySelector('span[class*="uppercase"]');
      const industry = industrySpan ? industrySpan.textContent.trim() : 'Bilateral Enterprise';
      
      const countrySpan = card.querySelector('span[class*="bg-brand-green/10"]') || card.querySelector('span[class*="bg-brand-blue/10"]') || card.querySelector('span[class*="inline-flex"]');
      const country = countrySpan ? countrySpan.textContent.trim() : 'Bangladesh';
      
      const logoText = card.querySelector('.w-12')?.textContent.trim() || 'CO';
      
      const modalTitle = modal.querySelector('#modal-company-title');
      const modalDesc = modal.querySelector('#modal-company-desc');
      const modalIndustry = modal.querySelector('#modal-company-industry');
      const modalCountry = modal.querySelector('#modal-company-country');
      const modalLogo = modal.querySelector('#modal-company-logo');
      
      if (modalTitle) modalTitle.textContent = title;
      if (modalDesc) modalDesc.textContent = desc;
      if (modalIndustry) modalIndustry.textContent = industry;
      if (modalCountry) modalCountry.textContent = country;
      if (modalLogo) modalLogo.textContent = logoText;
    });
  };
  initDirectoryModalMapper();

  // 11. Membership Form Stepper Handler
  const initMembershipStepper = () => {
    const section = document.getElementById('register-form-sec');
    if (!section) return;

    const steps = section.querySelectorAll('[data-member-step]');
    const progressLine = section.querySelector('#member-progress-line');
    const stepIndicators = section.querySelectorAll('.member-step-indicator');
    const btnNext = section.querySelector('#btn-member-next');
    const btnPrev = section.querySelector('#btn-member-prev');
    const btnSubmit = section.querySelector('#btn-member-submit');
    const form = section.querySelector('form');
    const footer = section.querySelector('#member-stepper-footer');
    
    let currentStep = 1;
    
    const updateStepView = () => {
      steps.forEach(step => {
        const stepNum = parseInt(step.getAttribute('data-member-step'));
        if (stepNum === currentStep) {
          step.classList.remove('hidden');
          step.classList.add('block');
        } else {
          step.classList.add('hidden');
          step.classList.remove('block');
        }
      });

      // Update progress indicators
      stepIndicators.forEach((ind, idx) => {
        if (idx + 1 <= currentStep && currentStep < 5) {
          ind.classList.add('bg-brand-green', 'text-white');
          ind.classList.remove('bg-neutral-border', 'text-text-muted');
        } else if (currentStep === 5) {
          ind.classList.add('bg-brand-green', 'text-white');
          ind.classList.remove('bg-neutral-border', 'text-text-muted');
        } else {
          ind.classList.remove('bg-brand-green', 'text-white');
          ind.classList.add('bg-neutral-border', 'text-text-muted');
        }
      });

      // Progress bar width
      if (progressLine) {
        let pct = 0;
        if (currentStep === 2) pct = 33;
        if (currentStep === 3) pct = 66;
        if (currentStep >= 4) pct = 100;
        progressLine.style.width = `${pct}%`;
      }

      // Toggle button visibilities
      if (currentStep === 1) {
        btnPrev?.classList.add('invisible');
      } else {
        btnPrev?.classList.remove('invisible');
      }

      if (currentStep === 4) {
        btnNext?.classList.add('hidden');
        btnSubmit?.classList.remove('hidden');
      } else if (currentStep === 5) {
        if (footer) footer.classList.add('hidden');
      } else {
        btnPrev?.classList.remove('hidden');
        btnNext?.classList.remove('hidden');
        btnSubmit?.classList.add('hidden');
      }
    };

    btnNext?.addEventListener('click', () => {
      const activeInputs = section.querySelector(`[data-member-step="${currentStep}"]`).querySelectorAll('input, select');
      let valid = true;
      activeInputs.forEach(input => {
        if (!input.checkValidity()) {
          input.reportValidity();
          valid = false;
        }
      });

      if (valid && currentStep < 4) {
        currentStep++;
        updateStepView();
      }
    });

    btnPrev?.addEventListener('click', () => {
      if (currentStep > 1 && currentStep < 5) {
        currentStep--;
        updateStepView();
      }
    });

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      currentStep = 5;
      updateStepView();
    });
    
    updateStepView();
  };
  initMembershipStepper();

  // 12. Discover Page Switchers & Gallery Filters
  const initDiscoverPageInteractions = () => {
    const btnBd = document.getElementById('btn-switch-bd');
    const btnMy = document.getElementById('btn-switch-my');
    const panelBd = document.getElementById('panel-discover-bd');
    const panelMy = document.getElementById('panel-discover-my');

    if (btnBd && btnMy && panelBd && panelMy) {
      btnBd.addEventListener('click', () => {
        panelBd.classList.remove('hidden');
        panelBd.classList.add('block');
        panelMy.classList.add('hidden');
        panelMy.classList.remove('block');

        btnBd.className = "px-6 py-2.5 bg-brand-green text-white text-xs font-bold uppercase rounded-btn shadow-sm hover:bg-brand-darkGreen transition-premium flex items-center gap-2";
        btnMy.className = "px-6 py-2.5 bg-neutral-bgSecondary border border-neutral-border text-text-dark text-xs font-bold uppercase rounded-btn hover:border-brand-blue hover:text-brand-blue transition-premium flex items-center gap-2";
      });

      btnMy.addEventListener('click', () => {
        panelMy.classList.remove('hidden');
        panelMy.classList.add('block');
        panelBd.classList.add('hidden');
        panelBd.classList.remove('block');

        btnMy.className = "px-6 py-2.5 bg-brand-blue text-white text-xs font-bold uppercase rounded-btn shadow-sm hover:bg-brand-darkBlue transition-premium flex items-center gap-2";
        btnBd.className = "px-6 py-2.5 bg-neutral-bgSecondary border border-neutral-border text-text-dark text-xs font-bold uppercase rounded-btn hover:border-brand-green hover:text-brand-green transition-premium flex items-center gap-2";
      });

      // Handle hash navigation offsets on loads
      if (window.location.hash === '#kl' || window.location.hash === '#malaysia') {
        btnMy.click();
      }
    }

    // Photo Gallery Filter
    const filterBtns = document.querySelectorAll('[data-gallery-filter]');
    const galleryItems = document.querySelectorAll('[data-gallery-item]');
    if (filterBtns.length > 0) {
      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.getAttribute('data-gallery-filter');

          filterBtns.forEach(b => {
            b.className = "px-4 py-2 bg-white border border-neutral-border hover:border-brand-green rounded text-text-body hover:text-brand-green transition-fast";
          });
          btn.className = "px-4 py-2 bg-brand-green text-white rounded shadow-sm transition-fast";

          galleryItems.forEach(item => {
            const cat = item.getAttribute('data-gallery-item');
            if (filter === 'all' || cat === filter) {
              item.classList.remove('hidden');
              item.classList.add('block');
            } else {
              item.classList.add('hidden');
              item.classList.remove('block');
            }
          });
        });
      });
    }
  };
  initDiscoverPageInteractions();

  // 13. News & Article Detail Modal Mapper
  const initNewsModalMapper = () => {
    const modal = document.getElementById('news-detail-modal');
    if (!modal) return;

    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-modal-open="news-detail-modal"]');
      if (!trigger) return;

      const card = trigger.closest('.group') || trigger.closest('.relative');
      if (!card) return;

      const title = card.querySelector('h3')?.textContent.trim();
      const desc = card.querySelector('p')?.textContent.trim();

      const modalTitle = modal.querySelector('#modal-news-title');
      const modalDesc = modal.querySelector('#modal-news-desc');

      if (modalTitle) modalTitle.textContent = title;
      if (modalDesc) modalDesc.textContent = desc;
    });
  };
  initNewsModalMapper();

  // 14. Initialize Economic Insights mini ECharts graphs
  try {
    const trendsMiniEl = document.getElementById('trends-mini-chart');
    if (trendsMiniEl) {
      const trendsChart = echarts.init(trendsMiniEl);
      trendsChart.setOption({
        tooltip: { trigger: 'axis' },
        grid: { left: '8%', right: '8%', top: '15%', bottom: '15%', containLabel: true },
        xAxis: { type: 'category', data: ['Q1', 'Q2', 'Q3', 'Q4'], axisLabel: { color: '#94a3b8', fontSize: 10 } },
        yAxis: { type: 'value', splitLine: { show: false }, axisLabel: { color: '#94a3b8', fontSize: 10 } },
        series: [{
          type: 'line',
          data: [120, 150, 180, 210],
          itemStyle: { color: '#006a4e' },
          lineStyle: { width: 2 }
        }]
      });
      window.addEventListener('resize', () => trendsChart.resize());
    }

    const inflationMiniEl = document.getElementById('inflation-mini-chart');
    if (inflationMiniEl) {
      const inflationChart = echarts.init(inflationMiniEl);
      inflationChart.setOption({
        tooltip: { trigger: 'axis' },
        grid: { left: '8%', right: '8%', top: '15%', bottom: '15%', containLabel: true },
        xAxis: { type: 'category', data: ['2023', '2024', '2025', '2026'], axisLabel: { color: '#94a3b8', fontSize: 10 } },
        yAxis: { type: 'value', splitLine: { show: false }, axisLabel: { color: '#94a3b8', fontSize: 10 } },
        series: [{
          type: 'bar',
          barWidth: '40%',
          data: [6.2, 5.8, 5.0, 4.0],
          itemStyle: { color: '#0033a0', borderRadius: 4 }
        }]
      });
      window.addEventListener('resize', () => inflationChart.resize());
    }

    const balanceMiniEl = document.getElementById('balance-mini-chart');
    if (balanceMiniEl) {
      const balanceChart = echarts.init(balanceMiniEl);
      balanceChart.setOption({
        tooltip: { trigger: 'axis' },
        grid: { left: '8%', right: '8%', top: '15%', bottom: '15%', containLabel: true },
        xAxis: { type: 'category', data: ['21', '22', '23', '24', '25', '26'], axisLabel: { color: '#94a3b8', fontSize: 10 } },
        yAxis: { type: 'value', splitLine: { show: false }, axisLabel: { color: '#94a3b8', fontSize: 10 } },
        series: [{
          type: 'line',
          smooth: true,
          areaStyle: { color: 'rgba(212, 175, 55, 0.2)' },
          data: [2.1, 2.5, 3.0, 3.4, 3.8, 4.2],
          itemStyle: { color: '#d4af37' },
          lineStyle: { width: 2 }
        }]
      });
      window.addEventListener('resize', () => balanceChart.resize());
    }
  } catch (err) {
    console.warn('[BMCCI Gateway] Mini ECharts initialization failed: ', err);
  }

  // 15. Contact Form Stepper Handler
  const initContactStepper = () => {
    const section = document.getElementById('inquiry-form-sec');
    if (!section) return;

    const steps = section.querySelectorAll('[data-contact-step]');
    const progressLine = section.querySelector('#contact-progress-line');
    const stepIndicators = section.querySelectorAll('.contact-step-indicator');
    const btnNext = section.querySelector('#btn-contact-next');
    const btnPrev = section.querySelector('#btn-contact-prev');
    const btnSubmit = section.querySelector('#btn-contact-submit');
    const form = section.querySelector('form');
    const footer = section.querySelector('#contact-stepper-footer');
    
    let currentStep = 1;
    
    const updateStepView = () => {
      steps.forEach(step => {
        const stepNum = parseInt(step.getAttribute('data-contact-step'));
        if (stepNum === currentStep) {
          step.classList.remove('hidden');
          step.classList.add('block');
        } else {
          step.classList.add('hidden');
          step.classList.remove('block');
        }
      });

      // Update progress indicators
      stepIndicators.forEach((ind, idx) => {
        if (idx + 1 <= currentStep && currentStep < 4) {
          ind.classList.add('bg-brand-green', 'text-white');
          ind.classList.remove('bg-neutral-border', 'text-text-muted');
        } else if (currentStep === 4) {
          ind.classList.add('bg-brand-green', 'text-white');
          ind.classList.remove('bg-neutral-border', 'text-text-muted');
        } else {
          ind.classList.remove('bg-brand-green', 'text-white');
          ind.classList.add('bg-neutral-border', 'text-text-muted');
        }
      });

      // Progress bar width
      if (progressLine) {
        let pct = 0;
        if (currentStep === 2) pct = 50;
        if (currentStep >= 3) pct = 100;
        progressLine.style.width = `${pct}%`;
      }

      // Toggle button visibilities
      if (currentStep === 1) {
        btnPrev?.classList.add('invisible');
      } else {
        btnPrev?.classList.remove('invisible');
      }

      if (currentStep === 3) {
        btnNext?.classList.add('hidden');
        btnSubmit?.classList.remove('hidden');
      } else if (currentStep === 4) {
        if (footer) footer.classList.add('hidden');
      } else {
        btnPrev?.classList.remove('hidden');
        btnNext?.classList.remove('hidden');
        btnSubmit?.classList.add('hidden');
      }
    };

    btnNext?.addEventListener('click', () => {
      const activeInputs = section.querySelector(`[data-contact-step="${currentStep}"]`).querySelectorAll('input, select, textarea');
      let valid = true;
      activeInputs.forEach(input => {
        if (!input.checkValidity()) {
          input.reportValidity();
          valid = false;
        }
      });

      if (valid && currentStep < 3) {
        currentStep++;
        updateStepView();
      }
    });

    btnPrev?.addEventListener('click', () => {
      if (currentStep > 1 && currentStep < 4) {
        currentStep--;
        updateStepView();
      }
    });

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      currentStep = 4;
      updateStepView();
    });
    
    updateStepView();
  };
  initContactStepper();
});
