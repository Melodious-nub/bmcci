/* ==========================================================================
   BMCCI MASTER LOGIC ROUTER (APP.JS)
   ========================================================================== */

import { initNavigation } from './navigation.js';
import { initAllAnimations } from './animations.js';
import { initUIComponents } from './components.js';

// Import Swiper components & CSS for event sliders
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Import ECharts library
import * as echarts from 'echarts';

// Import SweetAlert2
import Swal from 'sweetalert2';
import { gsap } from 'gsap';

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
  ChevronRight, 
  ChevronLeft,
  Info,
  ExternalLink,
  MapPin,
  Mail,
  Phone,
  Clock,
  Download,
  AlertCircle,
  Briefcase,
  TrendingDown,
  Activity,
  Target,
  Settings,
  Sun,
  Map,
  Anchor,
  Cpu,
  Package,
  Microscope,
  Loader2,
  Sprout,
  Maximize2,
  CheckCircle,
  Video,
  Plane,
  Hotel,
  FileCheck,
  Camera
} from 'lucide';

// Initialize core features on DOM content load
document.addEventListener('DOMContentLoaded', () => {
  console.log('[BMCCI Gateway] Core architecture loaded.');

  // 1. Load navigation handlers
  initNavigation();

  // 2. Load UI component listeners (Modals, Tabs, Dropdowns)
  initUIComponents();

  // 2.5 Newsletter Subscription Handler
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      Swal.fire({
        title: 'Subscribed Successfully!',
        text: 'Thank you for subscribing to BMCCI Insights. You will receive chamber news directly.',
        icon: 'success',
        confirmButtonColor: '#1d8f5b',
        confirmButtonText: 'Great!',
        background: '#ffffff',
        customClass: {
          popup: 'rounded-2xl shadow-xl',
          title: 'text-lg font-bold text-slate-800',
          htmlContainer: 'text-sm text-slate-600',
          confirmButton: 'rounded-btn font-semibold px-6'
        }
      }).then(() => {
        newsletterForm.reset();
      });
    });
  }

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
      ChevronRight,
      ChevronLeft,
      Info,
      ExternalLink,
      MapPin,
      Mail,
      Phone,
      Clock,
      Download,
      AlertCircle,
      Briefcase,
      TrendingDown,
      Activity,
      Target,
      Settings,
      Sun,
      Map,
      Anchor,
      Cpu,
      Package,
      Microscope,
      Loader2,
      Sprout,
      Maximize2,
      CheckCircle,
      Video,
      Plane,
      Hotel,
      FileCheck,
      Camera
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

  // 5.5 Initialize Partner Swiper (Marquee)
  try {
    const partnerSwiperEl = document.getElementById('partner-swiper');
    if (partnerSwiperEl) {
      new Swiper('#partner-swiper', {
        modules: [Autoplay],
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 24,
        loop: true,
        speed: 800,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        },
        allowTouchMove: true
      });
    }
  } catch (err) {
    console.warn('[BMCCI Gateway] Partner swiper failed to initialize: ', err);
  }

  // 6. Initialize ECharts Bilateral Trade Charts (Import & Export share)
  try {
    const exportChartEl = document.getElementById('export-chart');
    const importChartEl = document.getElementById('import-chart');
    
    if (exportChartEl) {
      const exportChart = echarts.init(exportChartEl);
      exportChart.setOption({
        tooltip: { trigger: 'item', backgroundColor: 'rgba(255, 255, 255, 0.95)', borderColor: '#e2e8f0', textStyle: { color: '#0f172a' }, extraCssText: 'box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); border-radius: 8px;' },
        legend: { bottom: '0%', left: 'center', textStyle: { color: '#64748b', fontSize: 11, fontWeight: '500' }, itemGap: 15 },
        series: [
          {
            name: 'Export Share',
            type: 'pie',
            radius: ['45%', '65%'],
            center: ['50%', '42%'],
            avoidLabelOverlap: false,
            itemStyle: { 
              borderRadius: 10, 
              borderColor: '#fff', 
              borderWidth: 3,
              shadowBlur: 15,
              shadowColor: 'rgba(0, 0, 0, 0.08)'
            },
            label: { show: false, position: 'center' },
            emphasis: {
              label: { show: true, fontSize: 16, fontWeight: '900', color: '#0f172a' },
              itemStyle: { shadowBlur: 20, shadowColor: 'rgba(0, 0, 0, 0.15)' }
            },
            labelLine: { show: false },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDuration: 1800,
            animationDelay: function (idx) { return Math.random() * 200; },
            data: [
              { value: 84, name: 'Ready-Made Garments', itemStyle: { color: '#006a4e' } },
              { value: 6, name: 'Agricultural Crops', itemStyle: { color: '#0ea5e9' } },
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
        tooltip: { trigger: 'item', backgroundColor: 'rgba(255, 255, 255, 0.95)', borderColor: '#e2e8f0', textStyle: { color: '#0f172a' }, extraCssText: 'box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); border-radius: 8px;' },
        legend: { bottom: '0%', left: 'center', textStyle: { color: '#64748b', fontSize: 11, fontWeight: '500' }, itemGap: 15 },
        series: [
          {
            name: 'Import Share',
            type: 'pie',
            radius: ['45%', '65%'],
            center: ['50%', '42%'],
            avoidLabelOverlap: false,
            itemStyle: { 
              borderRadius: 10, 
              borderColor: '#fff', 
              borderWidth: 3,
              shadowBlur: 15,
              shadowColor: 'rgba(0, 0, 0, 0.08)'
            },
            label: { show: false, position: 'center' },
            emphasis: {
              label: { show: true, fontSize: 16, fontWeight: '900', color: '#0f172a' },
              itemStyle: { shadowBlur: 20, shadowColor: 'rgba(0, 0, 0, 0.15)' }
            },
            labelLine: { show: false },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDuration: 1800,
            animationDelay: function (idx) { return Math.random() * 200; },
            data: [
              { value: 34, name: 'Refined Petroleum', itemStyle: { color: '#0ea5e9' } },
              { value: 24, name: 'Electronics & Chips', itemStyle: { color: '#006a4e' } },
              { value: 18, name: 'Palm Oil Cargo', itemStyle: { color: '#d4af37' } },
              { value: 14, name: 'Heavy Machinery', itemStyle: { color: '#8b5cf6' } },
              { value: 10, name: 'Raw Chemicals', itemStyle: { color: '#cbd5e1' } }
            ]
          }
        ]
      });
      window.addEventListener('resize', () => importChart.resize());
    }

    // New: FDI Bar Chart Configuration
    const fdiChartEl = document.getElementById('fdi-bar-chart');
    if (fdiChartEl) {
      const fdiChart = echarts.init(fdiChartEl);
      fdiChart.setOption({
        tooltip: { 
          trigger: 'axis', 
          axisPointer: { type: 'shadow' },
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderColor: '#e2e8f0',
          textStyle: { color: '#0f172a' },
          extraCssText: 'box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); border-radius: 8px;'
        },
        grid: { left: '3%', right: '6%', bottom: '3%', top: '5%', containLabel: true },
        xAxis: { type: 'value', boundaryGap: [0, 0.01], splitLine: { lineStyle: { type: 'dashed', color: '#f1f5f9' } }, axisLabel: { color: '#94a3b8' } },
        yAxis: { 
          type: 'category', 
          data: ['Tech & SaaS', 'Renewable Energy', 'Logistics', 'Real Estate', 'Telecom', 'Agro-Processing', 'Textile/RMG'],
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { fontWeight: '700', color: '#475569', fontSize: 11, margin: 16 }
        },
        series: [
          {
            name: 'FDI Inflow ($M)',
            type: 'bar',
            barWidth: '45%',
            showBackground: true,
            backgroundStyle: { color: '#f8fafc', borderRadius: [0, 8, 8, 0] },
            itemStyle: {
              borderRadius: [0, 8, 8, 0],
              shadowBlur: 10,
              shadowColor: 'rgba(14, 165, 233, 0.2)',
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: '#0284c7' },
                { offset: 1, color: '#38bdf8' }
              ])
            },
            label: { 
              show: true, 
              position: 'insideRight', 
              color: '#ffffff', 
              fontWeight: 'bold',
              formatter: '${c}M',
              padding: [0, 8, 0, 0]
            },
            data: [35, 45, 65, 85, 125, 210, 430],
            animationEasing: 'cubicOut',
            animationDuration: 2000,
            animationDelay: function (idx) { return idx * 100; }
          }
        ]
      });
      window.addEventListener('resize', () => fdiChart.resize());
    }

    // 6.5 Initialize Bilateral Trade Chart (Trade & Investment Page)
    const bilateralChartEl = document.getElementById('bilateral-trade-chart');
    if (bilateralChartEl) {
      const bilateralChart = echarts.init(bilateralChartEl);
      bilateralChart.setOption({
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'cross', label: { backgroundColor: '#1d8f5b' } },
          backgroundColor: 'rgba(15, 23, 42, 0.9)',
          borderColor: '#334155',
          textStyle: { color: '#f8fafc' }
        },
        legend: {
          data: ['Trade Volume ($B)', 'FDI Inflows ($M)'],
          textStyle: { color: '#94a3b8' },
          top: 0
        },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            data: ['2020', '2021', '2022', '2023', '2024', '2025', '2026 (Est)', '2027 (FTA)'],
            axisLabel: { color: '#94a3b8' },
            axisLine: { lineStyle: { color: '#334155' } }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: 'Trade Vol ($B)',
            position: 'left',
            nameTextStyle: { color: '#94a3b8' },
            axisLabel: { color: '#94a3b8', formatter: '${value}B' },
            splitLine: { lineStyle: { color: '#334155', type: 'dashed' } }
          },
          {
            type: 'value',
            name: 'FDI ($M)',
            position: 'right',
            nameTextStyle: { color: '#94a3b8' },
            axisLabel: { color: '#94a3b8', formatter: '${value}M' },
            splitLine: { show: false }
          }
        ],
        series: [
          {
            name: 'Trade Volume ($B)',
            type: 'bar',
            barWidth: '30%',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#1d8f5b' },
                { offset: 1, color: '#006a4e' }
              ]),
              borderRadius: [4, 4, 0, 0]
            },
            data: [2.1, 2.4, 2.7, 3.1, 3.4, 3.6, 3.8, 4.5]
          },
          {
            name: 'FDI Inflows ($M)',
            type: 'line',
            yAxisIndex: 1,
            smooth: true,
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: { color: '#d4af37' },
            lineStyle: { width: 3, shadowColor: 'rgba(212, 175, 55, 0.4)', shadowBlur: 10 },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(212, 175, 55, 0.3)' },
                { offset: 1, color: 'rgba(212, 175, 55, 0)' }
              ])
            },
            data: [150, 180, 210, 260, 310, 370, 412, 550]
          }
        ]
      });
      window.addEventListener('resize', () => bilateralChart.resize());
    }

    // 7. Initialize GDP Growth trends line chart
    const gdpTrendEl = document.getElementById('gdp-trend-chart');
    if (gdpTrendEl) {
      const gdpChart = echarts.init(gdpTrendEl);
      gdpChart.setOption({
        tooltip: { trigger: 'axis' },
        legend: { 
          data: ['Bangladesh', 'Malaysia'], 
          textStyle: { color: '#64748b' },
          bottom: 0,
          icon: 'circle'
        },
        grid: { left: '3%', right: '4%', bottom: '12%', top: '5%', containLabel: true },
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
    const btnReset = section.querySelector('#btn-member-reset');
    const form = section.querySelector('#member-form');
    const footer = section.querySelector('#member-stepper-footer');
    const fileUpload = section.querySelector('#member-file-upload');
    const fileText = section.querySelector('#file-upload-text');
    
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
        if (idx + 1 <= currentStep) {
          ind.classList.add('bg-brand-green', 'text-white', 'border-brand-green');
          ind.classList.remove('bg-neutral-bgSecondary', 'text-text-muted', 'border-neutral-border');
        } else {
          ind.classList.remove('bg-brand-green', 'text-white', 'border-brand-green');
          ind.classList.add('bg-neutral-bgSecondary', 'text-text-muted', 'border-neutral-border');
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
        if (footer) footer.classList.remove('hidden');
      }
    };

    if (fileUpload && fileText) {
      fileUpload.addEventListener('change', (e) => {
        if(e.target.files.length > 0) {
          fileText.textContent = e.target.files[0].name;
          fileText.classList.add('text-brand-green');
        } else {
          fileText.textContent = 'Click to upload file';
          fileText.classList.remove('text-brand-green');
        }
      });
    }

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

    btnReset?.addEventListener('click', () => {
      if (form) form.reset();
      currentStep = 1;
      if (fileText) {
        fileText.textContent = 'Click to upload file';
        fileText.classList.remove('text-brand-green');
      }
      updateStepView();
    });

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      currentStep = 5;
      updateStepView();
    });
    
    updateStepView();
  };
  initMembershipStepper();

  // 12. Discover Page Switchers, Gallery Filters & Dynamic Loaders
  const initDiscoverPageInteractions = () => {
    const btnBd = document.getElementById('btn-switch-bd');
    const btnMy = document.getElementById('btn-switch-my');
    const panelBd = document.getElementById('panel-discover-bd');
    const panelMy = document.getElementById('panel-discover-my');

    if (btnBd && btnMy && panelBd && panelMy) {
      btnBd.addEventListener('click', () => {
        if (!panelBd.classList.contains('hidden')) return;

        panelBd.classList.remove('hidden');
        panelBd.classList.add('block');
        panelMy.classList.add('hidden');
        panelMy.classList.remove('block');

        gsap.fromTo(panelBd, 
          { opacity: 0, y: 25, scale: 0.985 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out', clearProps: 'transform,opacity' }
        );

        btnBd.className = "px-6 py-2.5 bg-brand-green text-white text-xs font-extrabold uppercase rounded-full shadow-card hover:bg-brand-darkGreen transition-all duration-300 flex items-center gap-2.5 group";
        btnBd.innerHTML = `<span class="w-2 h-2 rounded-full bg-white animate-pulse"></span><span>Bangladesh Focus</span>`;

        btnMy.className = "px-6 py-2.5 bg-transparent text-text-dark text-xs font-extrabold uppercase rounded-full hover:bg-white hover:text-brand-blue transition-all duration-300 flex items-center gap-2.5 group";
        btnMy.innerHTML = `<span class="w-2 h-2 rounded-full bg-neutral-border group-hover:bg-brand-blue"></span><span>Malaysia Focus</span>`;
      });

      btnMy.addEventListener('click', () => {
        if (!panelMy.classList.contains('hidden')) return;

        panelMy.classList.remove('hidden');
        panelMy.classList.add('block');
        panelBd.classList.add('hidden');
        panelBd.classList.remove('block');

        gsap.fromTo(panelMy, 
          { opacity: 0, y: 25, scale: 0.985 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out', clearProps: 'transform,opacity' }
        );

        btnMy.className = "px-6 py-2.5 bg-brand-blue text-white text-xs font-extrabold uppercase rounded-full shadow-card hover:bg-brand-darkBlue transition-all duration-300 flex items-center gap-2.5 group";
        btnMy.innerHTML = `<span class="w-2 h-2 rounded-full bg-white animate-pulse"></span><span>Malaysia Focus</span>`;

        btnBd.className = "px-6 py-2.5 bg-transparent text-text-dark text-xs font-extrabold uppercase rounded-full hover:bg-white hover:text-brand-green transition-all duration-300 flex items-center gap-2.5 group";
        btnBd.innerHTML = `<span class="w-2 h-2 rounded-full bg-neutral-border group-hover:bg-brand-green"></span><span>Bangladesh Focus</span>`;
      });

      // Handle hash navigation offsets on loads
      if (window.location.hash === '#kl' || window.location.hash === '#malaysia') {
        btnMy.click();
      }
    }

    // Photo Gallery Filter Handler
    const filterBtns = document.querySelectorAll('[data-gallery-filter]');
    const galleryItems = document.querySelectorAll('[data-gallery-item]');
    if (filterBtns.length > 0) {
      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.getAttribute('data-gallery-filter');

          filterBtns.forEach(b => {
            b.className = "px-5 py-2.5 bg-neutral-bgSecondary border border-neutral-border text-text-dark hover:border-brand-green rounded-full hover:text-brand-green transition-all duration-300 flex items-center gap-2";
          });
          btn.className = "px-5 py-2.5 bg-brand-green text-white rounded-full shadow-card transition-all duration-300 flex items-center gap-2";

          const btnMoreGallery = document.getElementById('btn-load-more-gallery');
          if (btnMoreGallery) {
            if (filter === 'all') {
              if (!btnMoreGallery.hasAttribute('data-loaded')) {
                btnMoreGallery.classList.remove('hidden');
              }
            } else {
              btnMoreGallery.classList.add('hidden');
            }
          }

          const currentItems = document.querySelectorAll('[data-gallery-item]');
          const visibleMatches = [];

          currentItems.forEach(item => {
            const cat = item.getAttribute('data-gallery-item');
            if (filter === 'all' || cat === filter) {
              item.classList.remove('hidden');
              item.classList.add('block');
              visibleMatches.push(item);
            } else {
              item.classList.add('hidden');
              item.classList.remove('block');
            }
          });

          if (visibleMatches.length > 0) {
            gsap.fromTo(visibleMatches,
              { opacity: 0, scale: 0.92, y: 15 },
              { opacity: 1, scale: 1, y: 0, duration: 0.45, stagger: 0.04, ease: 'power2.out', clearProps: 'transform,opacity' }
            );
          }
        });
      });
    }

    // Enriched Lightbox Modal Handler for Gallery Images
    const lightboxModal = document.getElementById('gallery-lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxLocation = document.getElementById('lightbox-location');
    const lightboxCounter = document.getElementById('lightbox-counter');
    const lightboxCategory = document.getElementById('lightbox-category');
    const btnCloseLightbox = document.getElementById('btn-close-lightbox');
    const btnPrevLightbox = document.getElementById('btn-prev-lightbox');
    const btnNextLightbox = document.getElementById('btn-next-lightbox');

    let visibleGalleryItems = [];
    let currentGalleryIndex = 0;

    const updateLightboxView = (index) => {
      if (!visibleGalleryItems.length || index < 0 || index >= visibleGalleryItems.length) return;
      currentGalleryIndex = index;
      const targetItem = visibleGalleryItems[currentGalleryIndex];
      
      const img = targetItem.querySelector('img');
      const title = targetItem.querySelector('h4')?.textContent || 'Gallery Photo';
      const loc = targetItem.querySelector('p')?.textContent || '';
      const cat = targetItem.querySelector('span[class*="uppercase"]')?.textContent || targetItem.getAttribute('data-gallery-item') || 'Album Photo';

      if (lightboxImg && img) {
        lightboxImg.style.opacity = '0.3';
        lightboxImg.style.transform = 'scale(0.96)';
        setTimeout(() => {
          lightboxImg.src = img.src;
          lightboxImg.style.opacity = '1';
          lightboxImg.style.transform = 'scale(1)';
        }, 120);
      }

      if (lightboxTitle) lightboxTitle.textContent = title;
      if (lightboxLocation) {
        const locSpan = lightboxLocation.querySelector('span');
        if (locSpan) locSpan.textContent = loc;
      }

      if (lightboxCounter) {
        lightboxCounter.textContent = `Photo ${currentGalleryIndex + 1} of ${visibleGalleryItems.length}`;
      }

      if (lightboxCategory) {
        lightboxCategory.textContent = cat;
        if (cat.toLowerCase().includes('nature') || cat.toLowerCase().includes('trade') || cat.toLowerCase().includes('cultural')) {
          lightboxCategory.className = "px-3.5 py-1 bg-brand-green/90 text-white rounded-full text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-md border border-white/20";
        } else {
          lightboxCategory.className = "px-3.5 py-1 bg-brand-blue/90 text-white rounded-full text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-md border border-white/20";
        }
      }
    };

    const setupLightboxTriggers = () => {
      const items = document.querySelectorAll('[data-gallery-item]');
      items.forEach(item => {
        item.onclick = () => {
          if (!lightboxModal) return;

          const allItems = Array.from(document.querySelectorAll('[data-gallery-item]'));
          visibleGalleryItems = allItems.filter(el => {
            const style = window.getComputedStyle(el);
            return style.display !== 'none' && !el.classList.contains('hidden');
          });

          const clickedIdx = visibleGalleryItems.indexOf(item);
          updateLightboxView(clickedIdx !== -1 ? clickedIdx : 0);

          lightboxModal.classList.remove('hidden');
          lightboxModal.classList.add('flex');
          document.body.style.overflow = 'hidden';
          createIcons({ icons: { ChevronLeft, ChevronRight, X, MapPin, Info } });
        };
      });
    };
    setupLightboxTriggers();

    const closeLightbox = () => {
      if (!lightboxModal) return;
      lightboxModal.classList.add('hidden');
      lightboxModal.classList.remove('flex');
      document.body.style.overflow = '';
    };

    if (btnCloseLightbox && lightboxModal) {
      btnCloseLightbox.addEventListener('click', closeLightbox);
      lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) closeLightbox();
      });
    }

    if (btnPrevLightbox) {
      btnPrevLightbox.addEventListener('click', (e) => {
        e.stopPropagation();
        const prevIdx = (currentGalleryIndex - 1 + visibleGalleryItems.length) % visibleGalleryItems.length;
        updateLightboxView(prevIdx);
      });
    }

    if (btnNextLightbox) {
      btnNextLightbox.addEventListener('click', (e) => {
        e.stopPropagation();
        const nextIdx = (currentGalleryIndex + 1) % visibleGalleryItems.length;
        updateLightboxView(nextIdx);
      });
    }

    document.addEventListener('keydown', (e) => {
      if (!lightboxModal || lightboxModal.classList.contains('hidden')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') {
        const prevIdx = (currentGalleryIndex - 1 + visibleGalleryItems.length) % visibleGalleryItems.length;
        updateLightboxView(prevIdx);
      }
      if (e.key === 'ArrowRight') {
        const nextIdx = (currentGalleryIndex + 1) % visibleGalleryItems.length;
        updateLightboxView(nextIdx);
      }
    });

    // Skeleton Loader Generator Utility
    const createSkeletonCard = (type = 'card') => {
      const el = document.createElement('div');
      if (type === 'gallery') {
        el.className = 'relative aspect-[4/3] rounded-2xl bg-neutral-border/40 animate-pulse overflow-hidden shadow-sm skeleton-item';
        el.innerHTML = `<div class="w-full h-full bg-gradient-to-r from-neutral-border/30 via-white/40 to-neutral-border/30 animate-[shimmer_1.5s_infinite]"></div>`;
      } else {
        el.className = 'bg-white border border-neutral-border rounded-xl p-6 flex flex-col gap-4 shadow-sm animate-pulse skeleton-item';
        el.innerHTML = `
          <div class="w-full h-40 bg-neutral-border/40 rounded-lg"></div>
          <div class="h-5 w-3/4 bg-neutral-border/50 rounded"></div>
          <div class="h-4 w-full bg-neutral-border/30 rounded"></div>
          <div class="h-4 w-5/6 bg-neutral-border/30 rounded"></div>
        `;
      }
      return el;
    };

    // Load More Bangladesh Landmarks
    const btnMoreBdLandmarks = document.getElementById('btn-load-more-bd-landmarks');
    const bdLandmarksGrid = document.getElementById('bd-landmarks-grid');
    if (btnMoreBdLandmarks && bdLandmarksGrid) {
      btnMoreBdLandmarks.addEventListener('click', () => {
        btnMoreBdLandmarks.disabled = true;
        btnMoreBdLandmarks.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin text-brand-green"></i> Loading Landmarks...`;

        // Append 3 skeletons
        const skeletons = [createSkeletonCard(), createSkeletonCard(), createSkeletonCard()];
        skeletons.forEach(s => bdLandmarksGrid.appendChild(s));

        setTimeout(() => {
          skeletons.forEach(s => s.remove());

          const extraBD = [
            { title: 'Kantajew Temple Terracotta', place: 'Dinajpur', year: '1752 AD', img: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop', desc: 'A late-medieval Hindu temple built by Maharaja Prannath, renowned for intricate navaratna terracotta reliefs depicting epic legends.' },
            { title: 'Mainamati Buddhist Complex', place: 'Comilla', year: '8th Century AD', img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop', desc: 'An isolated ridge of low hills containing over 50 ancient Buddhist stupas, monasteries, and priceless bronze icons.' },
            { title: 'Sixty Dome Mosque Precinct', place: 'Bagerhat', year: '1459 AD', img: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=800&auto=format&fit=crop', desc: 'The surrounding medieval mint city of Khalifatabad, featuring multi-domed brick structures and ancient water tanks.' }
          ];

          extraBD.forEach(item => {
            const card = document.createElement('div');
            card.className = 'bg-white border border-neutral-border rounded-xl shadow-card hover-lift overflow-hidden flex flex-col justify-between group animate-reveal';
            card.innerHTML = `
              <div class="relative w-full aspect-video overflow-hidden shrink-0">
                <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover transition-premium duration-[1s] group-hover:scale-105" loading="lazy" />
                <span class="absolute top-4 left-4 inline-flex px-3 py-1 bg-brand-green text-white text-[10px] font-extrabold uppercase rounded-full shadow-card">Archaeological Site</span>
              </div>
              <div class="p-6 flex flex-col gap-3">
                <h3 class="text-text-dark font-extrabold text-base group-hover:text-brand-green transition-fast">${item.title}</h3>
                <p class="text-text-body text-xs leading-relaxed line-clamp-3">${item.desc}</p>
                <div class="pt-2 border-t border-neutral-border flex items-center justify-between text-[11px] font-semibold text-text-muted">
                  <span class="flex items-center gap-1"><i data-lucide="map-pin" class="w-3.5 h-3.5 text-brand-green"></i> ${item.place}</span>
                  <span class="text-brand-green font-bold">${item.year}</span>
                </div>
              </div>
            `;
            bdLandmarksGrid.appendChild(card);
          });

          createIcons({ icons: { MapPin, Loader2, ChevronDown, CheckCircle } });
          btnMoreBdLandmarks.classList.add('hidden');
        }, 1200);
      });
    }

    // Load More Malaysia Landmarks
    const btnMoreMyLandmarks = document.getElementById('btn-load-more-my-landmarks');
    const myLandmarksGrid = document.getElementById('my-landmarks-grid');
    if (btnMoreMyLandmarks && myLandmarksGrid) {
      btnMoreMyLandmarks.addEventListener('click', () => {
        btnMoreMyLandmarks.disabled = true;
        btnMoreMyLandmarks.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin text-brand-blue"></i> Loading Landmarks...`;

        const skeletons = [createSkeletonCard(), createSkeletonCard(), createSkeletonCard()];
        skeletons.forEach(s => myLandmarksGrid.appendChild(s));

        setTimeout(() => {
          skeletons.forEach(s => s.remove());

          const extraMY = [
            { title: 'Sarawak Cultural Village', place: 'Kuching, Borneo', year: 'Heritage Park', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop', desc: 'An award-winning living museum showcasing traditional longhouses, crafts, and dances of Dayak indigenous tribes.' },
            { title: 'Istana Negara Royal Palace', place: 'Kuala Lumpur', year: '2011 AD', img: 'https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=800&auto=format&fit=crop', desc: 'The official residence of the Yang di-Pertuan Agong, featuring 22 golden Islamic domes set across 97 hectares.' },
            { title: 'Kek Lok Si Temple', place: 'Air Itam, Penang', year: '1891 AD', img: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=800&auto=format&fit=crop', desc: 'The largest Buddhist temple complex in Malaysia, featuring the 7-tier Pagoda of Rama VI and a 36.5m bronze Kuan Yin statue.' }
          ];

          extraMY.forEach(item => {
            const card = document.createElement('div');
            card.className = 'bg-white border border-neutral-border rounded-xl shadow-card hover-lift overflow-hidden flex flex-col justify-between group animate-reveal';
            card.innerHTML = `
              <div class="relative w-full aspect-video overflow-hidden shrink-0">
                <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover transition-premium duration-[1s] group-hover:scale-105" loading="lazy" />
                <span class="absolute top-4 left-4 inline-flex px-3 py-1 bg-brand-blue text-white text-[10px] font-extrabold uppercase rounded-full shadow-card">Cultural Heritage</span>
              </div>
              <div class="p-6 flex flex-col gap-3">
                <h3 class="text-text-dark font-extrabold text-base group-hover:text-brand-blue transition-fast">${item.title}</h3>
                <p class="text-text-body text-xs leading-relaxed line-clamp-3">${item.desc}</p>
                <div class="pt-2 border-t border-neutral-border flex items-center justify-between text-[11px] font-semibold text-text-muted">
                  <span class="flex items-center gap-1"><i data-lucide="map-pin" class="w-3.5 h-3.5 text-brand-blue"></i> ${item.place}</span>
                  <span class="text-brand-blue font-bold">${item.year}</span>
                </div>
              </div>
            `;
            myLandmarksGrid.appendChild(card);
          });

          createIcons({ icons: { MapPin, Loader2, ChevronDown, CheckCircle } });
          btnMoreMyLandmarks.classList.add('hidden');
        }, 1200);
      });
    }

    // Load More Business Hubs
    const btnMoreHubs = document.getElementById('btn-load-more-hubs');
    const hubsGrid = document.getElementById('business-hubs-grid');
    if (btnMoreHubs && hubsGrid) {
      btnMoreHubs.addEventListener('click', () => {
        btnMoreHubs.disabled = true;
        btnMoreHubs.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin text-brand-green"></i> Loading Business Hubs...`;

        const skeletons = [createSkeletonCard(), createSkeletonCard()];
        skeletons.forEach(s => hubsGrid.appendChild(s));

        setTimeout(() => {
          skeletons.forEach(s => s.remove());

          const extraHubs = [
            { title: 'Rajshahi Silk & Agro-Export Zone', tag: 'Organic Textiles & Fruits', icon: 'sprout', color: 'brand-green', desc: 'A specialized silk weaving and horticulture export zone producing mulberry silk fabrics and premium mango exports to ASEAN markets.', tags: ['Organic Silk', 'Mango Exporters', 'North-West Corridor'] },
            { title: 'Johor Iskandar Technology Park', tag: 'Cross-Border Logistics', icon: 'package', color: 'brand-blue', desc: 'Strategic economic zone adjacent to Singapore, specializing in green cloud data centers, halal food processing, and cross-border JV logistics.', tags: ['Data Centers', 'Halal Hub', 'Singapore Gateway'] }
          ];

          extraHubs.forEach(item => {
            const card = document.createElement('div');
            card.className = 'bg-neutral-bgSecondary border border-neutral-border rounded-xl p-6 flex flex-col gap-4 hover-lift group relative overflow-hidden animate-reveal';
            card.innerHTML = `
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-extrabold text-${item.color} uppercase tracking-wider bg-${item.color}/10 px-2.5 py-1 rounded-full">${item.tag}</span>
                <i data-lucide="${item.icon}" class="w-5 h-5 text-${item.color}"></i>
              </div>
              <h3 class="text-text-dark font-extrabold text-xl leading-tight group-hover:text-${item.color} transition-fast">${item.title}</h3>
              <p class="text-text-body text-xs leading-relaxed">${item.desc}</p>
              <div class="flex flex-wrap gap-2 mt-auto pt-2 border-t border-neutral-border/60">
                ${item.tags.map(t => `<span class="px-2.5 py-1 bg-white border border-neutral-border rounded-md text-[10px] font-bold text-text-dark">${t}</span>`).join('')}
              </div>
            `;
            hubsGrid.appendChild(card);
          });

          createIcons({ icons: { Sprout, Package, Loader2, ChevronDown, Building2, Anchor, Cpu } });
          btnMoreHubs.classList.add('hidden');
        }, 1200);
      });
    }

    // Load More Gallery Photos
    const btnMoreGallery = document.getElementById('btn-load-more-gallery');
    const galleryGrid = document.getElementById('gallery-grid');
    if (btnMoreGallery && galleryGrid) {
      btnMoreGallery.addEventListener('click', () => {
        btnMoreGallery.disabled = true;
        btnMoreGallery.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin text-brand-green"></i> Loading Photos...`;

        const skeletons = [createSkeletonCard('gallery'), createSkeletonCard('gallery'), createSkeletonCard('gallery'), createSkeletonCard('gallery')];
        skeletons.forEach(s => galleryGrid.appendChild(s));

        setTimeout(() => {
          skeletons.forEach(s => s.remove());

          const extraPhotos = [
            { category: 'nature', title: 'Bandarban Nilgiri Hill Peaks', place: 'Bandarban, Bangladesh', color: 'brand-green', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop' },
            { category: 'nature', title: 'Cameron Highlands Fog Terraces', place: 'Pahang, Malaysia', color: 'brand-blue', img: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=800&auto=format&fit=crop' },
            { category: 'cities', title: 'KL TRX Financial Skyscrapers', place: 'Kuala Lumpur, Malaysia', color: 'brand-blue', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop' },
            { category: 'cultural', title: 'Ahsan Manzil Palace Front', place: 'Dhaka, Bangladesh', color: 'brand-green', img: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop' },
            { category: 'cultural', title: 'Lalbagh Fort Pari Bibi Tomb', place: 'Old Dhaka, Bangladesh', color: 'brand-green', img: 'https://images.unsplash.com/photo-1608958435020-e8a7109ba809?q=80&w=800&auto=format&fit=crop' },
            { category: 'trade', title: 'Semiconductor Cleanroom Fabs', place: 'Penang, Malaysia', color: 'brand-blue', img: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=800&auto=format&fit=crop' },
            { category: 'trade', title: 'Mirsarai Mega EPZ Industrial Port', place: 'Chattogram, Bangladesh', color: 'brand-green', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop' },
            { category: 'cultural', title: 'Sultan Abdul Samad Clock Tower', place: 'Kuala Lumpur, Malaysia', color: 'brand-blue', img: 'https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=800&auto=format&fit=crop' }
          ];

          extraPhotos.forEach(item => {
            const el = document.createElement('div');
            el.className = 'relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-card cursor-pointer transition-all duration-500 animate-reveal';
            el.setAttribute('data-gallery-item', item.category);
            el.innerHTML = `
              <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover transition-premium duration-[1.2s] group-hover:scale-110" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-between text-left text-white">
                <div class="flex justify-between items-center">
                  <span class="px-3 py-1 bg-${item.color}/90 text-white text-[10px] font-extrabold uppercase rounded-full backdrop-blur-md">${item.category}</span>
                  <div class="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white"><i data-lucide="maximize-2" class="w-4 h-4"></i></div>
                </div>
                <div>
                  <h4 class="font-extrabold text-base text-white leading-tight">${item.title}</h4>
                  <p class="text-xs font-semibold text-white mt-1.5 flex items-center gap-1.5"><i data-lucide="map-pin" class="w-3.5 h-3.5 text-white"></i> <span>${item.place}</span></p>
                </div>
              </div>
            `;
            galleryGrid.appendChild(el);
          });

          createIcons({ icons: { Maximize2, MapPin, Loader2, ChevronDown } });
          setupLightboxTriggers();
          btnMoreGallery.classList.add('hidden');
          btnMoreGallery.setAttribute('data-loaded', 'true');
        }, 1200);
      });
    }
  };
  initDiscoverPageInteractions();

  // 13. News Page Tab Filters
  const initNewsPageInteractions = () => {
    const newsTabBtns = document.querySelectorAll('[data-news-tab]');
    const newsCards = document.querySelectorAll('[data-news-item]');

    if (newsTabBtns.length > 0 && newsCards.length > 0) {
      newsTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const tab = btn.getAttribute('data-news-tab');

          newsTabBtns.forEach(b => {
            b.className = "px-4 sm:px-5 py-2.5 bg-white border border-neutral-border text-text-dark hover:border-brand-green rounded-full hover:text-brand-green transition-all duration-300 flex items-center gap-2 shadow-sm";
            const badge = b.querySelector('span[class*="rounded-full"]');
            if (badge && !b.querySelector('span[class*="w-2"]')) {
              badge.className = "px-2 py-0.5 bg-neutral-bgSecondary text-text-dark rounded-full text-[10px] font-bold";
            } else if (badge && b.querySelectorAll('span').length > 2) {
              const countBadge = b.querySelectorAll('span')[2];
              if (countBadge) countBadge.className = "px-2 py-0.5 bg-neutral-bgSecondary text-text-dark rounded-full text-[10px] font-bold";
            }
          });
          btn.className = "px-4 sm:px-5 py-2.5 bg-brand-green text-white rounded-full shadow-card transition-all duration-300 flex items-center gap-2";
          const btnBadge = btn.querySelector('span[class*="rounded-full"]');
          if (btnBadge && !btn.querySelector('span[class*="w-2"]')) {
            btnBadge.className = "px-2 py-0.5 bg-white/25 text-white rounded-full text-[10px] font-bold";
          } else if (btnBadge && btn.querySelectorAll('span').length > 2) {
            const countBadge = btn.querySelectorAll('span')[2];
            if (countBadge) countBadge.className = "px-2 py-0.5 bg-white/25 text-white rounded-full text-[10px] font-bold";
          }

          const visibleCards = [];
          newsCards.forEach(card => {
            const tags = card.getAttribute('data-news-item') || '';
            if (tab === 'all' || tags.includes(tab)) {
              card.classList.remove('hidden');
              card.classList.add('block');
              visibleCards.push(card);
            } else {
              card.classList.add('hidden');
              card.classList.remove('block');
            }
          });

          if (visibleCards.length > 0) {
            gsap.fromTo(visibleCards,
              { opacity: 0, scale: 0.92, y: 15 },
              { opacity: 1, scale: 1, y: 0, duration: 0.45, stagger: 0.04, ease: 'power2.out', clearProps: 'transform,opacity' }
            );
          }
        });
      });
    }
  };
  initNewsPageInteractions();

  // 14. News & Article Detail Modal Mapper
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
      const img = card.querySelector('img')?.src;
      const date = card.querySelector('span[class*="calendar"]')?.parentElement?.textContent.trim() || card.querySelector('span')?.textContent.trim();

      const modalTitle = modal.querySelector('#modal-news-title');
      const modalDesc = modal.querySelector('#modal-news-desc');
      const modalImg = modal.querySelector('#modal-news-img');
      const modalDate = modal.querySelector('#modal-news-date');

      if (modalTitle && title) modalTitle.textContent = title;
      if (modalDesc && desc) modalDesc.textContent = desc;
      if (modalImg && img) modalImg.src = img;
      if (modalDate && date) modalDate.textContent = date;
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

  // 15. Contact Form Stepper Handler & Office Map Switcher
  const initContactPageInteractions = () => {
    const section = document.getElementById('inquiry-form-sec');
    if (section) {
      const steps = section.querySelectorAll('[data-contact-step]');
      const progressLine = section.querySelector('#contact-progress-line');
      const stepIndicators = section.querySelectorAll('.contact-step-indicator');
      const btnNext = section.querySelector('#btn-contact-next');
      const btnPrev = section.querySelector('#btn-contact-prev');
      const btnSubmit = section.querySelector('#btn-contact-submit');
      const form = section.querySelector('#contact-inquiry-form') || section.querySelector('form');
      const footer = section.querySelector('#contact-stepper-footer');
      const fileInput = section.querySelector('#contact-file-input');
      const fileNameSpan = section.querySelector('#contact-file-name');
      const refIdSpan = section.querySelector('#inquiry-ref-id');
      
      let currentStep = 1;

      if (fileInput && fileNameSpan) {
        fileInput.addEventListener('change', (e) => {
          if (e.target.files.length > 0) {
            fileNameSpan.textContent = e.target.files[0].name;
            fileNameSpan.classList.add('text-brand-green', 'font-bold');
          } else {
            fileNameSpan.textContent = 'Upload Brief PDF / DOCX';
            fileNameSpan.classList.remove('text-brand-green', 'font-bold');
          }
        });
      }
      
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
          if (refIdSpan) {
            refIdSpan.textContent = `BMCCI-2026-${Math.floor(1000 + Math.random() * 9000)}`;
          }
        } else {
          btnPrev?.classList.remove('hidden');
          btnNext?.classList.remove('hidden');
          btnSubmit?.classList.add('hidden');
        }
      };

      btnNext?.addEventListener('click', () => {
        const activeStep = section.querySelector(`[data-contact-step="${currentStep}"]`);
        if (!activeStep) return;
        const activeInputs = activeStep.querySelectorAll('input, select, textarea');
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
    }

    // Office Location Switcher (Dhaka vs Kuala Lumpur)
    const btnDhaka = document.getElementById('btn-office-dhaka');
    const btnKl = document.getElementById('btn-office-kl');
    const panelDhaka = document.getElementById('panel-office-dhaka');
    const panelKl = document.getElementById('panel-office-kl');
    const mapDhaka = document.getElementById('iframe-map-dhaka');
    const mapKl = document.getElementById('iframe-map-kl');

    if (btnDhaka && btnKl && panelDhaka && panelKl) {
      const dotDhaka = btnDhaka.querySelector('span.rounded-full');
      const dotKl = btnKl.querySelector('span.rounded-full');

      btnDhaka.addEventListener('click', () => {
        btnDhaka.className = "px-6 py-3 bg-brand-green text-white font-extrabold text-xs rounded-full shadow-card transition-all flex items-center gap-2";
        if (dotDhaka) dotDhaka.className = "w-2.5 h-2.5 rounded-full bg-white";
        
        btnKl.className = "px-6 py-3 bg-neutral-bgSecondary border border-neutral-border text-text-dark hover:border-brand-blue hover:text-brand-blue font-extrabold text-xs rounded-full transition-all flex items-center gap-2";
        if (dotKl) dotKl.className = "w-2.5 h-2.5 rounded-full bg-brand-blue";

        panelDhaka.classList.remove('hidden');
        panelDhaka.classList.add('flex');
        panelKl.classList.add('hidden');
        panelKl.classList.remove('flex');

        if (mapDhaka && mapKl) {
          mapDhaka.classList.remove('hidden');
          mapKl.classList.add('hidden');
        }

        gsap.fromTo(panelDhaka,
          { opacity: 0, scale: 0.95, y: 10 },
          { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power2.out', clearProps: 'transform,opacity' }
        );
      });

      btnKl.addEventListener('click', () => {
        btnKl.className = "px-6 py-3 bg-brand-blue text-white font-extrabold text-xs rounded-full shadow-card transition-all flex items-center gap-2";
        if (dotKl) dotKl.className = "w-2.5 h-2.5 rounded-full bg-white";

        btnDhaka.className = "px-6 py-3 bg-neutral-bgSecondary border border-neutral-border text-text-dark hover:border-brand-green hover:text-brand-green font-extrabold text-xs rounded-full transition-all flex items-center gap-2";
        if (dotDhaka) dotDhaka.className = "w-2.5 h-2.5 rounded-full bg-brand-green";

        panelKl.classList.remove('hidden');
        panelKl.classList.add('flex');
        panelDhaka.classList.add('hidden');
        panelDhaka.classList.remove('flex');

        if (mapDhaka && mapKl) {
          mapKl.classList.remove('hidden');
          mapDhaka.classList.add('hidden');
        }

        gsap.fromTo(panelKl,
          { opacity: 0, scale: 0.95, y: 10 },
          { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power2.out', clearProps: 'transform,opacity' }
        );
      });
    }
  };
  initContactPageInteractions();
});
