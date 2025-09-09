/**
 * Simple Form Submission Handler
 * Complete rewrite of submission logic
 */

class SimpleFormSubmit {
    constructor() {
        this.form = null;
        this.submitBtn = null;
        this.isSubmitting = false;
        this.currentLanguage = 'en';
        this.translations = {
            en: {
                'page_title': 'Tourism & Hospitality Support Survey - VATEL Rwanda',
                'intro_title': 'Tourism & Hospitality Support Survey',
                'intro_full_text': 'At BPN, we place entrepreneurs at the center of everything we do. In partnership with the Mastercard Foundation, we are collaborating with VATEL RWANDA to provide sector-specific support tailored to your needs.\n\nFollowing the online info-session held on Friday, 22nd August, we would like to better understand your needs that VATEL Rwanda can provide.\n\nWe kindly ask you to take a few minutes to complete this short survey. Kindly consider responding to this survey once you have reviewed the VATEL presentation document shared in our last communication. Your input will help us design support that is most relevant and impactful for your business.',
                'got_it': 'Got it',
                'survey_title': 'Tourism & Hospitality Support Survey',
                'survey_description': 'In partnership with the Mastercard Foundation, we are collaborating with VATEL RWANDA to provide sector-specific support. Please complete this survey to help us understand your needs.',
                'participant_info': 'Participant Information',
                'business_operations': 'Business Operations',
                'course_preferences': 'Vatel Course Preferences',
                'specialized_courses': 'Specialized Courses & Training Needs',
                'webinar_experience': 'Webinar Experience',
                'submit_form': 'SUBMIT SURVEY',
                'next': 'Next',
                'previous': 'Previous',
                'full_name': 'Full Name',
                'title': 'Title',
                'organization_name': 'Organization/Business Name',
                'tourism_areas': 'Which areas of the tourism and hospitality sector does your business operate in? (Select all that apply)',
                'accommodation': 'Accommodation (e.g., hotels, lodges, guesthouses)',
                'food_beverage': 'Food and Beverage (e.g., restaurants, cafes, catering services)',
                'tour_operations': 'Tour Operations and Travel Agencies',
                'transportation': 'Transportation Services (e.g., car rentals, shuttles, airport transfers)',
                'attractions': 'Attractions and Activities (e.g., cultural experiences, adventure tours)',
                'event_management': 'Event Management and MICE (Meetings, Incentives, Conferences, Exhibitions)',
                'general_courses': 'Which of these general foundational courses from Vatel Rwanda would be most beneficial for your business? (Select only one that is most relevant)',
                'hospitality_intro': 'Hospitality Today: An Introduction Course',
                'lodging_food_service': 'The Lodging and Food Service Industry Course',
                'quality_sanitation': 'Quality Sanitation Management Course',
                'food_safety': 'Food Safety: Managing with the HACCP System Course',
                'marketing_hospitality': 'Marketing in the Hospitality Industry Course',
                'revenue_management': 'Revenue Management Course',
                'supervision_hospitality': 'Supervision in the Hospitality Industry Course',
                'hospitality_law': 'Understanding Hospitality Law Course',
                'leadership_management': 'Leadership and Management in the Hospitality Course',
                'hospitality_track': 'Category 1: For Hospitality Entrepreneurs (Hotels, Restaurants, Cafes, and Bakeries) - Choose one that is relevant to your business',
                'food_beverage_operations': 'Managing Food and Beverage Operations Course',
                'housekeeping_operations': 'Managing Housekeeping Operations Course',
                'front_office_operations': 'Managing Front Office Operations Course',
                'facilities_management': 'Hospitality Facilities Management and Design Course',
                'accounting_hospitality': 'Accounting for Hospitality Managers Course',
                'tourism_track': 'Category 2: For Tourism Entrepreneurs (Tour Operators and Travel Agencies) - Choose one that is relevant to your business',
                'destination_management': 'Fundamentals of Destination Management & Marketing Course',
                'world_resorts': 'The World of Resorts Course',
                'service_food_beverage': 'Managing Service in Food and Beverage Operations Course',
                'convention_management': 'Convention Management and Service Course',
                'club_accounting': 'Accounting for Club Operations Course',
                'not_applicable': 'Not applicable to my business',
                'business_challenges': 'What challenges are you currently facing in your business that training from Vatel Rwanda could help address?',
                'enrollment_likelihood': 'How likely are you to enroll yourself or your 1 staff member in a training course offered by Vatel?',
                'additional_support': 'What additional support would you like to receive from BPN to strengthen your business in the tourism and hospitality sector?',
                'attended_session': 'Did you attend the AHLEI info session?',
                'reviewed_details': 'Have you had the chance to review the course details shared during/after the webinar?',
                'unaddressed_concerns': 'Were there any concerns you had about the program that were not addressed during the webinar?',
                'additional_questions': 'Do you have any additional questions or clarifications you would like us to address?',
                'enrollment_motivation': 'What motivated you (or would motivate you) to enroll in the AHLEI program?',
                'enrollment_challenges': 'Do you foresee any challenges that may prevent you from enrolling (e.g., cost, time, scheduling)?',
                'additional_feedback': 'Any additional feedback or suggestions?',
                'yes': 'Yes',
                'no': 'No',
                'not_yet': 'Not yet, but I plan to',
                'yes_specify': 'Yes (please specify below)',
                // Notification messages
                'form_submitted_success': 'Survey submitted successfully!',
                'form_saved_offline': 'Survey saved. Will submit when online.',
                'network_error': 'Network error. Survey saved, will retry when online.',
                'submission_failed': 'Submission failed. Please check your internet connection.',
                'connecting': 'Connecting...',
                'retrying': 'Retrying...',
                'admin_logout_success': 'Logged out successfully - session cleared',
                // User guide translations
                'guide_title': 'Welcome! Here\'s how to complete your tourism & hospitality survey',
                'guide_step1_title': 'Share your participant information',
                'guide_step1_desc': 'Start by providing your name, title, and organization information. This helps us understand your background in the tourism and hospitality sector.',
                'guide_step2_title': 'Tell us about your business operations',
                'guide_step2_desc': 'Help us understand which areas of tourism and hospitality your business operates in, from accommodation to tours and events.',
                'guide_step3_title': 'Choose your preferred Vatel courses',
                'guide_step3_desc': 'Select the foundational courses from Vatel Rwanda that would be most beneficial for your business development.',
                'guide_step4_title': 'Explore specialized training options',
                'guide_step4_desc': 'Review specialized courses for hospitality or tourism entrepreneurs and tell us about your training needs and challenges.',
                'guide_step5_title': 'Share your webinar experience',
                'guide_step5_desc': 'Let us know about your experience with the AHLEI info session and provide feedback to help us improve our support.',
                'guide_start_using': 'Start Survey',
                'guide_dont_show': 'Don\'t show this guide again'
            },
            rw: {
                'page_title': 'Isuzuma ry\'Ubufasha mu Bukerarugendo n\'Ubunyangamugayo - VATEL Rwanda',
                'intro_title': 'Isuzuma ry\'Ubufasha mu Bukerarugendo n\'Ubunyangamugayo',
                'intro_full_text': 'Muri BPN, turashyira abacuruzi mu gacukuru k\'ibintu byose dukora. Mu gufatanya na Ishinga rya Mastercard, turafatanya na VATEL RWANDA gutanga ubufasha bwihariye bukwiye.\n\nNyuma y\'ikiganiro cyo kuri interineti cyabereye ku wa gatanu, 22 Kanama, tubashaka gusobanukirwa neza ibyo mukeneye VATEL Rwanda ishobora kutanga.\n\nTubisabira gufata iminota mike kugira mwuzuze iki gisuzuma gito. Nyamuneka tekereza gukurikiza iki gisuzuma umaze kureba inyandiko ya VATEL twasangiye mu itumanaho rya nyuma. Igitekerezo cyawe kizadufasha gushyiraho ubufasha bukwiye kandi bufite akamaro ku bucuruzi bwawe.',
                'got_it': 'Byumvise',
                'survey_title': 'Isuzuma ry\'Ubufasha mu Bukerarugendo n\'Ubunyangamugayo',
                'survey_description': 'Mu gufatanya na Ishinga rya Mastercard, turafatanya na VATEL RWANDA gutanga ubufasha bwihariye. Uzuza iki gisuzuma kugira dumenye ibyo ukeneye.',
                'participant_info': 'Amakuru y\'Uwitabiriye',
                'business_operations': 'Imikorere y\'Ubucuruzi',
                'course_preferences': 'Amahitamo y\'Amasomo ya Vatel',
                'specialized_courses': 'Amasomo y\'Ubuzima n\'Ibikenewe by\'Amahugurwa',
                'webinar_experience': 'Ubunyangamugayo bwa Webinar',
                'submit_form': 'OHEREZA ISUZUMA',
                'next': 'Komeza',
                'previous': 'Subira',
                'entrepreneur_name': 'Witwa nte?',
                'company_name': 'Ikigo cyawe cyitwa nte?',
                'business_growth_limited': 'Wumva iterambere ry\'ubucuruzi bwawe rihagarikwa n\'ubukene bw\'ubumenyi bw\'ikoranabuhanga, sisitemu, cyangwa ubuyobozi bwo hanze?',
                'yes_often': 'Yego, kenshi',
                'sometimes': 'Rimwe na rimwe',
                'no_fully_equipped': 'Oya, ndumva nfite ibintu byose',
                'decision_making': 'Ni gute ufata ibyemezo mugihe uhura n\'ibibazo bigoye by\'ubucuruzi (urugero, ibibazo by\'umusaruro, imikorere y\'itsinda, iterambere ry\'isoko)?',
                'trial_error': 'Nkoresha uburyo bwo kugerageza no gukosora',
                'ask_friends_peers': 'Mbaza incuti/bagenzi bange',
                'search_online_trainings': 'Nshakisha kuri interineti cyangwa nitabira amahugurwa',
                'consult_experts_mentors': 'Nganira n\'impuguke/abayobozi',
                'top_challenges': 'Ni ibihe bibiri bibazo bikomeye by\'ubucuruzi bwawe ushaka cyane ubufasha bw\'impuguke?',
                'increasing_sales': 'Kwongera kugurisha',
                'improving_production': 'Gutezimbere inzira z\'umusaruro',
                'modernizing_business': 'Kuvugurura ubucuruzi bwanjye',
                'becoming_sustainable': 'Guhinduka birambye',
                'optimizing_team': 'Gutunganya imiterere y\'itsinda/imikorere',
                'improving_quality': 'Gutezimbere ubwiza bw\'ibicuruzwa cyangwa serivisi',
                'challenge_details': 'Nyamuneka tanga birambuye ku bibazo byihariye uhura nabyo mu bucuruzi bwawe ubu.',
                'expert_support_areas': 'Niba impuguke mpuzamahanga ishobora kugufasha kure no kuri rusura, ni ibihe bice byihariye wagira ubushake bwo kubona inama nkana cyangwa amahugurwa?',
                'desired_outcomes': 'Niba ushobora kubona ubuyobozi bwuzuye uhereye ku mpuguke mpuzamahanga, ni ibihe bisubizo bifuza kubona mu bucuruzi bwawe mu mezi 6-12 azaza?',
                'ready_to_participate': 'Waraguteguye gukurikiza ibyifuzo by\'impuguke no kwitabira ibiganiro byo gukurikirana kugira ubone ingaruka z\'igihe kirekire ku bucuruzi bwawe no mu muryango?',
                'yes_ready_committed': 'Yego, nditeguye kandi ndiyemeje',
                'maybe_understand_more': 'Ahari, nshaka gusobanukirwa byinshi',
                'no_not_at_moment': 'Oya, ntabwo mu gihe gino',
                // Notification messages
                'form_submitted_success': 'Isuzuma ryoherejwe neza!',
                'form_saved_offline': 'Isuzuma ryabitswe. Rizohererezwa mugihe ukorana kuri interineti.',
                'network_error': 'Ikibazo cyo kuragurana. Isuzuma ryabitswe, tuzongera tugerageze.',
                'submission_failed': 'Kohereza byanze. Suzuma niba ukoresha interineti neza.',
                'connecting': 'Twiragurana...',
                'retrying': 'Twongera tugerageza...',
                'admin_logout_success': 'Byasuye neza - ubwiyunge bwasibwe',
                // User guide translations
                'guide_title': 'Murakaza neza! Dore uburyo bwo gusuzuma ubufasha mu bukerarugendo n\'ubunyangamugayo',
                'guide_step1_title': 'Sangiza amakuru yawe yo kwitabira',
                'guide_step1_desc': 'Tangira utanga amazina yawe, umwanya wawe, n\'amakuru y\'ikigo cyawe. Ibi bituma tumenyera amateka yawe mu nganda y\'ubukerarugendo n\'ubunyangamugayo.',
                'guide_step2_title': 'Tubwire ku mikorere y\'ubucuruzi bwawe',
                'guide_step2_desc': 'Dufashe gusobanukirwa ibiranga ubucuruzi bwawe mu bukerarugendo n\'ubunyangamugayo, kuva mu byicaro kugeza ku ngendo n\'ibirori.',
                'guide_step3_title': 'Hitamo amasomo ya Vatel ukunda',
                'guide_step3_desc': 'Hitamo amasomo y\'ibanze ya Vatel Rwanda yaba ashoboye kugufasha mu iterambere ry\'ubucuruzi bwawe.',
                'guide_step4_title': 'Shakisha amahitamo y\'amahugurwa yihariye',
                'guide_step4_desc': 'Suzuma amasomo yihariye y\'abacuruzi b\'ubunyangamugayo cyangwa ubukerarugendo maze tubwire ibikenewe byawe by\'amahugurwa n\'ibibazo.',
                'guide_step5_title': 'Sangiza ubunyangamugayo bwawe bwa webinar',
                'guide_step5_desc': 'Tubwire ku bunyangamugayo bwawe mu kiganiro cya AHLEI maze utugire igitekerezo cyo kugira dushobore kuzamura ubufasha bwacu.',
                'guide_start_using': 'Tangira Isuzuma',
                'guide_dont_show': 'Ntuyerekane uyu mubonano nanone'
            }
        };
    }

    init() {
        console.log('SimpleFormSubmit: Initializing...');
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        console.log('SimpleFormSubmit: Setting up...');
        
        // Set up navigation first
        this.setupNavigation();
        
        // Set up language switcher
        this.setupLanguageSwitcher();
        
        // Initialize user guide
        this.initUserGuide();
        
        // Find form and button
        this.form = document.getElementById('entrepreneurSurveyForm');
        this.submitBtn = document.getElementById('submitBtn');
        
        if (!this.form) {
            console.error('SimpleFormSubmit: Form not found');
            return;
        }
        
        if (!this.submitBtn) {
            console.error('SimpleFormSubmit: Submit button not found');
            return;
        }

        // Make submit button visible and styled
        this.submitBtn.style.display = 'block';
        this.submitBtn.style.visibility = 'visible';
        this.submitBtn.style.backgroundColor = '#28a745';
        this.submitBtn.style.color = 'white';
        this.submitBtn.style.padding = '12px 24px';
        this.submitBtn.style.border = 'none';
        this.submitBtn.style.borderRadius = '5px';
        this.submitBtn.style.fontSize = '16px';
        this.submitBtn.style.cursor = 'pointer';
        this.submitBtn.innerHTML = '<i class="fas fa-check"></i> SUBMIT FORM';

        // Remove any existing event listeners
        this.submitBtn.onclick = null;
        
        // Add new click handler
        this.submitBtn.addEventListener('click', (e) => this.handleSubmit(e));
        
        // Set up form navigation
        this.setupFormNavigation();
        
        // Initialize offline storage system
        this.initOfflineStorage();
        
        // Initialize network monitoring
        this.initNetworkMonitoring();
        
        // Load draft if available
        this.loadDraft();
        
        // Set up radio button selection effects
        this.setupRadioButtonEffects();
        
        console.log('SimpleFormSubmit: Setup complete - button is ready');
    }

    // Toast notification system
    showToast(messageKey, type = 'info', duration = 3000) {
        const message = this.translations[this.currentLanguage][messageKey] || messageKey;
        const container = document.getElementById('toastContainer');
        
        if (!container) {
            console.error('Toast container not found');
            return;
        }

        // Create toast element
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        // Get appropriate icon
        let icon = 'fas fa-info-circle';
        if (type === 'success') icon = 'fas fa-check-circle';
        else if (type === 'error') icon = 'fas fa-exclamation-circle';
        else if (type === 'warning') icon = 'fas fa-exclamation-triangle';
        
        toast.innerHTML = `
            <i class="${icon} toast-icon"></i>
            <span class="toast-message">${message}</span>
            <button class="toast-close" onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Add to container
        container.appendChild(toast);
        
        // Trigger animation
        setTimeout(() => toast.classList.add('show'), 10);
        
        // Auto remove after duration
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }

    // Network connectivity detection
    initNetworkMonitoring() {
        this.isOnline = navigator.onLine;
        
        window.addEventListener('online', () => {
            this.isOnline = true;
            this.showToast('connecting', 'info', 2000);
            this.processOfflineSubmissions();
        });
        
        window.addEventListener('offline', () => {
            this.isOnline = false;
        });
    }

    // Offline storage system
    initOfflineStorage() {
        this.offlineStorageKey = 'bpn_pending_submissions';
        this.draftStorageKey = 'bpn_form_draft';
        
        // Auto-save form data as user types
        if (this.form) {
            this.form.addEventListener('input', () => {
                this.saveDraft();
            });
        }
    }

    saveDraft() {
        if (!this.form) return;
        
        const formData = new FormData(this.form);
        const data = {};
        
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        // Also save checkboxes
        const checkboxes = this.form.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            data[checkbox.name] = checkbox.checked;
        });
        
        localStorage.setItem(this.draftStorageKey, JSON.stringify({
            data: data,
            timestamp: Date.now()
        }));
    }

    loadDraft() {
        try {
            const draft = localStorage.getItem(this.draftStorageKey);
            if (draft) {
                const { data, timestamp } = JSON.parse(draft);
                
                // Only load draft if it's less than 24 hours old
                if (Date.now() - timestamp < 24 * 60 * 60 * 1000) {
                    this.populateForm(data);
                    return true;
                }
            }
        } catch (error) {
            console.error('Error loading draft:', error);
        }
        return false;
    }

    populateForm(data) {
        if (!this.form) return;
        
        Object.keys(data).forEach(key => {
            const element = this.form.querySelector(`[name="${key}"]`);
            if (element) {
                if (element.type === 'checkbox') {
                    element.checked = data[key];
                } else {
                    element.value = data[key];
                }
            }
        });
    }

    saveOfflineSubmission(formData) {
        try {
            const submissions = JSON.parse(localStorage.getItem(this.offlineStorageKey) || '[]');
            submissions.push({
                data: formData,
                timestamp: Date.now(),
                retryCount: 0
            });
            localStorage.setItem(this.offlineStorageKey, JSON.stringify(submissions));
            this.showToast('form_saved_offline', 'warning');
        } catch (error) {
            console.error('Error saving offline submission:', error);
            this.showToast('submission_failed', 'error');
        }
    }

    async processOfflineSubmissions() {
        try {
            const submissions = JSON.parse(localStorage.getItem(this.offlineStorageKey) || '[]');
            if (submissions.length === 0) return;

            this.showToast('retrying', 'info', 2000);

            for (let i = submissions.length - 1; i >= 0; i--) {
                const submission = submissions[i];
                const success = await this.submitToFirebase(submission.data);
                
                if (success) {
                    submissions.splice(i, 1);
                    this.showToast('form_submitted_success', 'success');
                } else {
                    submission.retryCount = (submission.retryCount || 0) + 1;
                    // Remove submissions that have failed too many times
                    if (submission.retryCount > 3) {
                        submissions.splice(i, 1);
                    }
                }
            }

            localStorage.setItem(this.offlineStorageKey, JSON.stringify(submissions));
        } catch (error) {
            console.error('Error processing offline submissions:', error);
        }
    }

    clearDraft() {
        localStorage.removeItem(this.draftStorageKey);
    }

    setupLanguageSwitcher() {
        const langButtons = document.querySelectorAll('.lang-btn');
        
        langButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.getAttribute('data-lang');
                this.switchLanguage(lang);
            });
        });
    }

    switchLanguage(lang) {
        if (lang === this.currentLanguage) return;
        
        this.currentLanguage = lang;
        
        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
        
        // Update page title
        document.title = this.translations[lang]['page_title'];
        
        // Update translatable elements
        this.updateTranslations();
        
        // Update placeholders
        this.updatePlaceholders(lang);
    }
    
    updatePlaceholders(lang) {
        if (lang === 'rw') {
            // Update all placeholder texts to Kinyarwanda
            const placeholderMap = {
                'companyDescription': 'Tubwire mu make ibyerekeye ikigo cyawe — icyo gikora n\'icyo cyatuma gitandukana n\'ibindi (interuro 2-3)',
                'jobSummary': 'Ibisobanuro byigihe gito by\'umurimo (imirongo 2-3)',
                'keyResponsibilities': 'Andika inshingano 4-6 z\'ingenzi z\'uyu murimo...',
                'idealAge': 'urugero: imyaka 25-35',
                'idealLocation': 'Ahantu hashakwa abakoresha',
                'educationLevel': 'urugero: Ayisumbuye, Impamyabumenyi, Icyiciro cya kabiri',
                'technicalSkills': 'Andika porogaramu, impamyabumenyi, ubuhanga busabwa...',
                'otherBehavioralSkills': 'Nyamuneka sobanura ubundi buhanga',
                'workEnvironment': 'Bazakora n\'ande? (Umuyobozi, itsinda, abakiriya?) Aho bakorera ni hehe?',
                'salaryRange': 'urugero: RWF 250,000 - 350,000',
                'otherBenefits': 'Nyamuneka sobanura izindi nyungu',
                'workingHours': 'urugero: 9 am–5 pm, Akazi k\'amakipe',
                'additionalNotes': 'Hari ikindi ushaka kuvuga?'
            };
            
            Object.keys(placeholderMap).forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.placeholder = placeholderMap[id];
                }
            });
            
            // Update dynamic position placeholders
            document.querySelectorAll('[id^="pos"][id$="_jobSummary"]').forEach(el => {
                el.placeholder = 'Ibisobanuro byigihe gito by\'umurimo (imirongo 2-3)';
            });
            document.querySelectorAll('[id^="pos"][id$="_keyResponsibilities"]').forEach(el => {
                el.placeholder = 'Andika inshingano 4-6 z\'ingenzi z\'uyu murimo...';
            });
            document.querySelectorAll('[id^="pos"][id$="_educationLevel"]').forEach(el => {
                el.placeholder = 'urugero: Ayisumbuye, Impamyabumenyi, Icyiciro cya kabiri';
            });
            document.querySelectorAll('[id^="pos"][id$="_technicalSkills"]').forEach(el => {
                el.placeholder = 'Andika porogaramu, impamyabumenyi, ubuhanga busabwa...';
            });
            document.querySelectorAll('[id^="pos"][id$="_salaryRange"]').forEach(el => {
                el.placeholder = 'urugero: RWF 250,000 - 350,000';
            });
            document.querySelectorAll('[id^="pos"][id$="_otherBenefits"]').forEach(el => {
                el.placeholder = 'Nyamuneka sobanura izindi nyungu';
            });
            document.querySelectorAll('[id^="pos"][id$="_workingHours"]').forEach(el => {
                el.placeholder = 'urugero: 9 am–5 pm, Akazi k\'amakipe';
            });
            document.querySelectorAll('[id^="pos"][id$="_additionalNotes"]').forEach(el => {
                el.placeholder = 'Hari ikindi ushaka kuvuga kubyerekeye uyu murimo?';
            });
        } else {
            // Reset to English placeholders
            const placeholderMap = {
                'companyDescription': 'Tell us briefly about your company — what you do and what makes your business unique (2-3 sentences)',
                'jobSummary': 'Brief description of the role\'s purpose (2-3 lines)',
                'keyResponsibilities': 'List 4-6 main tasks and responsibilities for this role...',
                'idealAge': 'e.g., 25-35 years',
                'idealLocation': 'Preferred candidate location',
                'educationLevel': 'e.g., High School, Certificate, Degree',
                'technicalSkills': 'List required software, certificates, specific skills...',
                'otherBehavioralSkills': 'Please specify any other qualities',
                'workEnvironment': 'Who will they work with? (Supervisor, team, customers?) What\'s the workplace like?',
                'salaryRange': 'e.g., RWF 250,000 - 350,000',
                'otherBenefits': 'Please specify any other benefits',
                'workingHours': 'e.g., 9am–5pm, Shift work',
                'additionalNotes': 'Any extra info you\'d like to share?'
            };
            
            Object.keys(placeholderMap).forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.placeholder = placeholderMap[id];
                }
            });
            
            // Update dynamic position placeholders
            document.querySelectorAll('[id^="pos"][id$="_jobSummary"]').forEach(el => {
                el.placeholder = 'Brief description of the role\'s purpose (2-3 lines)';
            });
            document.querySelectorAll('[id^="pos"][id$="_keyResponsibilities"]').forEach(el => {
                el.placeholder = 'List 4-6 main tasks and responsibilities for this role...';
            });
            document.querySelectorAll('[id^="pos"][id$="_educationLevel"]').forEach(el => {
                el.placeholder = 'e.g., High School, Certificate, Degree';
            });
            document.querySelectorAll('[id^="pos"][id$="_technicalSkills"]').forEach(el => {
                el.placeholder = 'List required software, certificates, specific skills...';
            });
            document.querySelectorAll('[id^="pos"][id$="_salaryRange"]').forEach(el => {
                el.placeholder = 'e.g., RWF 250,000 - 350,000';
            });
            document.querySelectorAll('[id^="pos"][id$="_otherBenefits"]').forEach(el => {
                el.placeholder = 'Please specify any other benefits';
            });
            document.querySelectorAll('[id^="pos"][id$="_workingHours"]').forEach(el => {
                el.placeholder = 'e.g., 9am–5pm, Shift work';
            });
            document.querySelectorAll('[id^="pos"][id$="_additionalNotes"]').forEach(el => {
                el.placeholder = 'Any extra info you\'d like to share about this position?';
            });
        }
    }

    updateTranslations() {
        const lang = this.currentLanguage;
        const translations = this.translations[lang];
        
        // Update elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                if (element.tagName === 'OPTION') {
                    element.textContent = translations[key];
                } else {
                    element.textContent = translations[key];
                }
            }
        });
    }

    setupNavigation() {
        // Handle "Got it" button to show survey form
        const gotItBtn = document.getElementById('gotItBtn');
        if (gotItBtn) {
            gotItBtn.addEventListener('click', () => {
                console.log('Got it button clicked - showing survey');
                this.showView('surveyView');
            });
            console.log('Got it button handler added');
        } else {
            console.warn('Got it button not found');
        }

        // Set up admin access via long press on logo
        this.setupAdminAccess();
    }

    setupAdminAccess() {
        // Find all potential logo elements (header and intro page)
        const logos = document.querySelectorAll('.bpn-logo, #logoContainer img, .logo img');
        
        if (logos.length === 0) {
            console.warn('No BPN logos found for admin access');
            return;
        }

        logos.forEach((logo, index) => {
            let pressTimer;
            let isLongPress = false;

            const startLongPress = (e) => {
                e.preventDefault(); // Prevent default behaviors
                isLongPress = false;
                console.log(`Long press started on logo ${index + 1}`);
                pressTimer = setTimeout(() => {
                    isLongPress = true;
                    console.log('Long press detected - showing admin access');
                    this.showAdminAccess();
                }, 3000); // 3 second long press for better UX
            };

            const endLongPress = (e) => {
                clearTimeout(pressTimer);
                if (isLongPress) {
                    console.log('Long press completed');
                } else {
                    console.log('Short press - no admin access');
                }
            };

            // Touch events for mobile
            logo.addEventListener('touchstart', startLongPress);
            logo.addEventListener('touchend', endLongPress);
            logo.addEventListener('touchcancel', endLongPress);

            // Mouse events for desktop
            logo.addEventListener('mousedown', startLongPress);
            logo.addEventListener('mouseup', endLongPress);
            logo.addEventListener('mouseleave', endLongPress);

            // Prevent context menu on long press
            logo.addEventListener('contextmenu', (e) => e.preventDefault());
        });

        console.log(`Admin access setup complete - long press any BPN logo (${logos.length} logos found)`);
    }
    
    setupRadioButtonEffects() {
        // Find all radio button groups that should have the selection effect
        const radioGroups = ['generalCourse', 'hospitalityTrack', 'tourismTrack'];
        
        radioGroups.forEach(groupName => {
            const radioButtons = document.querySelectorAll(`input[name="${groupName}"]`);
            
            if (radioButtons.length > 0) {
                const parentContainer = radioButtons[0].closest('.checkbox-group');
                
                radioButtons.forEach(radio => {
                    // Store the previous state to detect if clicking on already selected
                    let wasChecked = false;
                    
                    radio.addEventListener('mousedown', () => {
                        wasChecked = radio.checked;
                    });
                    
                    radio.addEventListener('click', (e) => {
                        // If clicking on already selected radio button, unselect it
                        if (wasChecked) {
                            radio.checked = false;
                            this.handleRadioDeselection(groupName, parentContainer);
                            e.preventDefault();
                        } else {
                            // Normal selection behavior
                            this.handleRadioSelection(groupName, parentContainer);
                        }
                    });
                });
            }
        });
    }
    
    handleRadioSelection(groupName, container) {
        if (!container) return;
        
        // Add selection class to container
        container.classList.add('has-selection');
        
        // Find all labels in this group
        const allLabels = container.querySelectorAll('.checkbox-label');
        
        // Remove selected class from all labels first
        allLabels.forEach(label => {
            label.classList.remove('selected');
        });
        
        // Find the checked radio button and mark its label as selected
        const checkedRadio = container.querySelector(`input[name="${groupName}"]:checked`);
        if (checkedRadio) {
            const selectedLabel = checkedRadio.closest('.checkbox-label');
            if (selectedLabel) {
                selectedLabel.classList.add('selected');
            }
        }
    }
    
    handleRadioDeselection(groupName, container) {
        if (!container) return;
        
        // Remove selection class from container to remove blur effect
        container.classList.remove('has-selection');
        
        // Remove selected class from all labels
        const allLabels = container.querySelectorAll('.checkbox-label');
        allLabels.forEach(label => {
            label.classList.remove('selected');
        });
    }

    async showAdminAccess() {
        // Check if admin is already logged in (persistent session)
        if (this.isAdminLoggedIn()) {
            console.log('Admin session found - skipping authentication');
            this.showAdminPanel();
            return;
        }
        
        // Check if admin exists and authenticate
        const adminExists = await this.checkAdminExists();
        
        if (!adminExists) {
            this.showAdminSetup();
        } else {
            this.showAdminLogin();
        }
    }

    // Check if admin has a persistent session
    isAdminLoggedIn() {
        try {
            const adminSession = localStorage.getItem('bpn_admin_session');
            if (!adminSession) return false;
            
            const session = JSON.parse(adminSession);
            
            // Check if session is valid (not expired and has valid data)
            if (session.isAuthenticated && session.loginTime) {
                console.log('Valid admin session found:', session.loginTime);
                return true;
            }
            
            return false;
        } catch (error) {
            console.error('Error checking admin session:', error);
            // Clear corrupted session data
            localStorage.removeItem('bpn_admin_session');
            return false;
        }
    }

    // Create persistent admin session
    createAdminSession() {
        try {
            const sessionData = {
                isAuthenticated: true,
                loginTime: new Date().toISOString(),
                sessionId: 'admin_' + Date.now(),
                userAgent: navigator.userAgent.substring(0, 100) // Store partial user agent for basic security
            };
            
            localStorage.setItem('bpn_admin_session', JSON.stringify(sessionData));
            console.log('Admin session created:', sessionData.loginTime);
        } catch (error) {
            console.error('Error creating admin session:', error);
        }
    }

    // Clear admin session (for logout)
    clearAdminSession() {
        try {
            localStorage.removeItem('bpn_admin_session');
            console.log('Admin session cleared');
        } catch (error) {
            console.error('Error clearing admin session:', error);
        }
    }

    async checkAdminExists() {
        try {
            if (window.firebaseConfig && window.firebaseConfig.getCollection) {
                console.log('Checking admin existence...');
                const result = await window.firebaseConfig.getCollection('admins');
                console.log('Admin collection result:', result);
                
                if (result.success && result.data && result.data.length > 0) {
                    console.log('Admin exists: true');
                    return true;
                } else {
                    console.log('Admin exists: false');
                    return false;
                }
            }
            console.log('Firebase not available');
            return false;
        } catch (error) {
            console.log('Error checking admin existence:', error);
            return false;
        }
    }

    showAdminSetup() {
        const popup = document.createElement('div');
        popup.className = 'notification-overlay';
        popup.innerHTML = `
            <div class="notification-popup" style="max-width: 400px;">
                <div class="notification-icon" style="background: linear-gradient(135deg, #667eea, #764ba2);">
                    <i class="fas fa-shield-alt"></i>
                </div>
                <h1 class="notification-title">Admin Setup</h1>
                <p class="notification-message">Set up the admin password. This can only be done once.</p>
                <div class="auth-form">
                    <div class="form-group">
                        <input type="password" id="adminSetupPassword" placeholder="Enter admin password" class="form-control">
                    </div>
                    <div class="form-group">
                        <input type="password" id="adminConfirmPassword" placeholder="Confirm password" class="form-control">
                    </div>
                    <div class="auth-form-actions">
                        <button onclick="this.closest('.notification-overlay').remove()" class="btn btn-secondary">
                            <i class="fas fa-times"></i>
                            Cancel
                        </button>
                        <button onclick="window.simpleFormSubmit.createAdmin()" class="btn btn-primary">
                            <i class="fas fa-shield-alt"></i>
                            Create Admin
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(popup);
        setTimeout(() => popup.classList.add('show'), 100);
    }

    showAdminLogin() {
        const popup = document.createElement('div');
        popup.className = 'notification-overlay';
        popup.innerHTML = `
            <div class="notification-popup" style="max-width: 400px;">
                <div class="notification-icon" style="background: linear-gradient(135deg, #667eea, #764ba2);">
                    <i class="fas fa-lock"></i>
                </div>
                <h1 class="notification-title">Admin Login</h1>
                <p class="notification-message">Enter admin password to access the panel.</p>
                <div class="auth-form">
                    <div class="form-group">
                        <input type="password" id="adminLoginPassword" placeholder="Enter password" class="form-control">
                    </div>
                    <div class="auth-form-actions">
                        <button onclick="this.closest('.notification-overlay').remove()" class="btn btn-secondary">
                            <i class="fas fa-times"></i>
                            Cancel
                        </button>
                        <button onclick="window.simpleFormSubmit.loginAdmin()" class="btn btn-primary">
                            <i class="fas fa-sign-in-alt"></i>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(popup);
        setTimeout(() => popup.classList.add('show'), 100);
        
        // Focus on password input
        setTimeout(() => {
            document.getElementById('adminLoginPassword').focus();
        }, 200);
    }

    async createAdmin() {
        console.log('createAdmin called');
        
        const password = document.getElementById('adminSetupPassword').value;
        const confirmPassword = document.getElementById('adminConfirmPassword').value;
        
        console.log('Password values:', password ? 'provided' : 'empty', confirmPassword ? 'provided' : 'empty');
        
        if (!password || password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        try {
            console.log('Checking Firebase availability...');
            console.log('window.firebaseConfig:', window.firebaseConfig);
            console.log('createDocument method:', window.firebaseConfig?.createDocument);
            
            // Create admin in Firebase
            if (window.firebaseConfig && window.firebaseConfig.createDocument) {
                console.log('Creating admin document...');
                const result = await window.firebaseConfig.createDocument('admins', {
                    password: password,
                    createdAt: new Date().toISOString(),
                    lastLogin: null
                });
                
                console.log('Admin creation result:', result);
                
                if (result.success) {
                    console.log('Admin created successfully, creating session...');
                    // Create persistent session for new admin
                    this.createAdminSession();
                    
                    // Close popup and show admin panel
                    const popup = document.querySelector('.notification-overlay');
                    if (popup) {
                        popup.remove();
                    }
                    this.showAdminPanel();
                    this.showToast('admin_created_success', 'success');
                } else {
                    console.error('Admin creation failed:', result.error);
                    alert('Error creating admin account: ' + result.error);
                }
            } else {
                console.error('Firebase not available');
                alert('Firebase not available. Cannot create admin account.');
            }
        } catch (error) {
            console.error('Error creating admin:', error);
            alert('Error creating admin account: ' + error.message);
        }
    }

    async loginAdmin() {
        const password = document.getElementById('adminLoginPassword').value;
        console.log('Login attempt with password:', password ? '***' : 'empty');
        
        if (!password) {
            alert('Please enter password');
            return;
        }
        
        try {
            // Check password in Firebase
            if (window.firebaseConfig && window.firebaseConfig.getCollection) {
                console.log('Getting admin collection...');
                const result = await window.firebaseConfig.getCollection('admins');
                console.log('Admin collection result:', result);
                
                if (result.success && result.data && result.data.length > 0) {
                    const admin = result.data[0];
                    console.log('Admin found:', admin);
                    
                    if (admin.password === password) {
                        console.log('Password matches - creating persistent session...');
                        
                        // Create persistent admin session
                        this.createAdminSession();
                        
                        // Update last login
                        await window.firebaseConfig.updateDocument('admins', admin.id, {
                            lastLogin: new Date().toISOString()
                        });
                        
                        // Close popup and show admin panel
                        const popup = document.querySelector('.notification-overlay');
                        if (popup) {
                            popup.remove();
                        }
                        
                        console.log('Showing admin panel...');
                        this.showAdminPanel();
                        
                        Utils.showSuccess('Login successful - session saved');
                    } else {
                        console.log('Password mismatch');
                        alert('Invalid password');
                    }
                } else {
                    console.log('No admin found in collection');
                    alert('No admin account found');
                }
            } else {
                console.log('Firebase not available');
                alert('Firebase not available. Cannot authenticate.');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Error logging in: ' + error.message);
        }
    }

    showAdminPanel() {
        console.log('showAdminPanel called');
        
        // Show impressive loader first
        this.showAdminLoader();
        
        // Simulate authentication process with realistic timing
        setTimeout(() => {
            this.completeAdminLogin();
        }, 2500);
    }
    
    showAdminLoader() {
        const loader = document.createElement('div');
        loader.id = 'adminLoader';
        loader.className = 'admin-loader-overlay';
        loader.innerHTML = `
            <div class="admin-loader-container">
                <div class="admin-loader-animation">
                    <div class="admin-loader-circles">
                        <div class="admin-loader-circle"></div>
                        <div class="admin-loader-circle"></div>
                        <div class="admin-loader-circle"></div>
                        <div class="admin-loader-circle"></div>
                    </div>
                    <div class="admin-loader-pulse"></div>
                </div>
                <div class="admin-loader-content">
                    <div class="admin-loader-logo">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h2 class="admin-loader-title">Authenticating Admin Access</h2>
                    <div class="admin-loader-progress">
                        <div class="admin-loader-progress-bar"></div>
                    </div>
                    <p class="admin-loader-status">Verifying credentials...</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(loader);
        
        // Animate loader entrance
        setTimeout(() => {
            loader.classList.add('show');
        }, 100);
        
        // Update status messages
        setTimeout(() => {
            const status = loader.querySelector('.admin-loader-status');
            if (status) status.textContent = 'Establishing secure connection...';
        }, 800);
        
        setTimeout(() => {
            const status = loader.querySelector('.admin-loader-status');
            if (status) status.textContent = 'Loading admin dashboard...';
        }, 1600);
        
        setTimeout(() => {
            const status = loader.querySelector('.admin-loader-status');
            if (status) status.textContent = 'Access granted. Welcome!';
        }, 2200);
    }
    
    completeAdminLogin() {
        // Create admin view if it doesn't exist
        if (!document.getElementById('adminView')) {
            console.log('Creating admin view...');
            this.createAdminView();
        } else {
            console.log('Admin view already exists');
        }
        
        // Show admin interface
        console.log('Switching to admin view...');
        this.showView('adminView');
        
        // Ensure we have some test data for demo purposes
        this.ensureTestData();
        
        // Load admin data with a small delay to ensure DOM is ready
        setTimeout(() => {
            console.log('Loading admin data...');
            this.loadAdminData();
            
            // Show one-time refresh message for app improvements
            this.showRefreshNotification();
        }, 100);
        
        // Hide loader with success animation
        const loader = document.getElementById('adminLoader');
        if (loader) {
            loader.classList.add('success');
            setTimeout(() => {
                loader.classList.remove('show');
                setTimeout(() => {
                    if (loader.parentNode) {
                        loader.parentNode.removeChild(loader);
                    }
                }, 500);
            }, 800);
        }
    }
    
    ensureTestData() {
        const existingData = JSON.parse(localStorage.getItem('employer-submissions') || '[]');
        
        if (existingData.length === 0) {
            console.log('No existing data, creating test data...');
            const testData = [
                {
                    companyName: 'TechCorp Solutions',
                    industry: 'Technology',
                    companySize: '50-200 employees',
                    yearsInBusiness: '5-10 years',
                    hiringGoals: 'Scale technical team',
                    specificRoles: 'Software Engineers, Data Scientists',
                    experienceLevel: 'Mid-level',
                    budgetRange: '$50,000 - $100,000',
                    timeline: '3-6 months',
                    challenges: 'Finding skilled developers',
                    skillsRequired: 'JavaScript, Python, React',
                    location: 'Cape Town',
                    remoteWork: 'Hybrid',
                    additionalComments: 'Looking for passionate developers',
                    timestamp: Date.now() - 86400000, // 1 day ago
                    completionTime: 420000 // 7 minutes
                },
                {
                    companyName: 'Green Energy Co',
                    industry: 'Renewable Energy',
                    companySize: '10-50 employees',
                    yearsInBusiness: '2-5 years',
                    hiringGoals: 'Expand operations team',
                    specificRoles: 'Project Managers, Engineers',
                    experienceLevel: 'Senior',
                    budgetRange: '$40,000 - $80,000',
                    timeline: '1-3 months',
                    challenges: 'Limited candidate pool',
                    skillsRequired: 'Project management, Engineering',
                    location: 'Johannesburg',
                    remoteWork: 'On-site',
                    additionalComments: 'Urgent hiring needed',
                    timestamp: Date.now() - 3600000, // 1 hour ago
                    completionTime: 360000 // 6 minutes
                },
                {
                    companyName: 'FinanceMax Ltd',
                    industry: 'Financial Services',
                    companySize: '200-500 employees',
                    yearsInBusiness: '10+ years',
                    hiringGoals: 'Digital transformation',
                    specificRoles: 'Business Analysts, Developers',
                    experienceLevel: 'Entry-level',
                    budgetRange: '$30,000 - $60,000',
                    timeline: '6+ months',
                    challenges: 'Skills gap in digital tools',
                    skillsRequired: 'SQL, Analytics, Finance',
                    location: 'Durban',
                    remoteWork: 'Remote',
                    additionalComments: 'Training provided',
                    timestamp: Date.now() - 7200000, // 2 hours ago
                    completionTime: 480000 // 8 minutes
                }
            ];
            
            localStorage.setItem('employer-submissions', JSON.stringify(testData));
            console.log('Test data created');
        }
    }

    showRefreshNotification() {
        // Check if this notification has already been shown
        const notificationShown = localStorage.getItem('adminRefreshNotificationShown');
        
        if (!notificationShown) {
            // Show the notification popup
            const notification = document.createElement('div');
            notification.className = 'notification-overlay';
            notification.innerHTML = `
                <div class="notification-popup" style="max-width: 450px; text-align: center;">
                    <div class="notification-icon" style="background: linear-gradient(135deg, #10B981, #059669); font-size: 2.5rem;">
                        🚀
                    </div>
                    <h1 class="notification-title">App Improvements Applied!</h1>
                    <p class="notification-message" style="font-size: 1rem; line-height: 1.6; margin: 1.5rem 0;">
                        Please <strong>hard refresh</strong> your browser for the latest changes to take place. 
                        There have been a few improvements to stabilize the entire app. Thanks! 🙏
                    </p>
                    <div class="notification-actions" style="display: flex; gap: 0.75rem; margin-top: 1.5rem;">
                        <button onclick="this.closest('.notification-overlay').remove(); localStorage.setItem('adminRefreshNotificationShown', 'true');" class="btn btn-secondary" style="flex: 1;">
                            <i class="fas fa-check"></i>
                            Got it
                        </button>
                        <button onclick="window.location.reload(true); localStorage.setItem('adminRefreshNotificationShown', 'true');" class="btn btn-primary" style="flex: 1;">
                            <i class="fas fa-sync-alt"></i>
                            Refresh Now
                        </button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(notification);
            
            // Show with animation
            setTimeout(() => {
                notification.classList.add('show');
            }, 100);
            
            // Mark as shown in localStorage so it only appears once
            // This will be set when user clicks either button
        }
    }

    createAdminView() {
        const adminView = document.createElement('div');
        adminView.id = 'adminView';
        adminView.className = 'view';
        adminView.innerHTML = `
            <div class="admin-container">
                <!-- Header Section -->
                <div class="admin-header">
                    <div class="admin-header-left">
                        <h1><i class="fas fa-shield-alt"></i> Expert Support Matching Dashboard</h1>
                        <p class="admin-subtitle">Entrepreneur Assessment & Analytics</p>
                    </div>
                    <div class="admin-header-right">
                        <button class="btn btn-warning" onclick="window.simpleFormSubmit.logoutAdmin()">
                            <i class="fas fa-sign-out-alt"></i> Logout
                        </button>
                        <button class="btn btn-secondary" onclick="window.simpleFormSubmit.showView('surveyView')">
                            <i class="fas fa-arrow-left"></i> Back to Survey
                        </button>
                    </div>
                </div>
                
                <!-- Main Dashboard Grid -->
                <div class="admin-grid">
                    <!-- Left Column: Stats & Quick Actions -->
                    <div class="admin-left-column">
                        <!-- Statistics Cards -->
                        <div class="stats-section">
                            <div class="section-title">
                                <i class="fas fa-chart-bar"></i>
                                <span>Entrepreneur Assessment Overview</span>
                            </div>
                            <div class="stats-grid">
                                <div class="stat-card primary">
                                    <div class="stat-icon">
                                        <i class="fas fa-building"></i>
                                    </div>
                                    <div class="stat-content">
                                        <div class="stat-number" id="totalEntrepreneurs">0</div>
                                        <div class="stat-label">Entrepreneurs Assessed</div>
                                    </div>
                                </div>
                                <div class="stat-card success">
                                    <div class="stat-icon">
                                        <i class="fas fa-users"></i>
                                    </div>
                                    <div class="stat-content">
                                        <div class="stat-number" id="totalChallenges">0</div>
                                        <div class="stat-label">Business Challenges</div>
                                    </div>
                                </div>
                                <div class="stat-card info">
                                    <div class="stat-icon">
                                        <i class="fas fa-industry"></i>
                                    </div>
                                    <div class="stat-content">
                                        <div class="stat-number" id="topChallenge">-</div>
                                        <div class="stat-label">Top Challenge Area</div>
                                    </div>
                                </div>
                                <div class="stat-card warning">
                                    <div class="stat-icon">
                                        <i class="fas fa-clock"></i>
                                    </div>
                                    <div class="stat-content">
                                        <div class="stat-number" id="readyCommitted">0</div>
                                        <div class="stat-label">Ready & Committed</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Quick Actions -->
                        <div class="actions-section">
                            <div class="section-title">
                                <i class="fas fa-bolt"></i>
                                <span>Quick Actions</span>
                            </div>
                            <div class="actions-grid">
                                <button class="action-card primary" onclick="window.simpleFormSubmit.exportResponses()">
                                    <div class="action-icon">
                                        <i class="fas fa-download"></i>
                                    </div>
                                    <div class="action-content">
                                        <div class="action-title">Export Data</div>
                                        <div class="action-desc">Download Excel report</div>
                                    </div>
                                </button>
                                <button class="action-card secondary" onclick="window.simpleFormSubmit.viewResponses()">
                                    <div class="action-icon">
                                        <i class="fas fa-eye"></i>
                                    </div>
                                    <div class="action-content">
                                        <div class="action-title">View All</div>
                                        <div class="action-desc">Browse responses</div>
                                    </div>
                                </button>
                                <button class="action-card info" onclick="window.simpleFormSubmit.refreshData()">
                                    <div class="action-icon">
                                        <i class="fas fa-sync-alt"></i>
                                    </div>
                                    <div class="action-content">
                                        <div class="action-title">Refresh</div>
                                        <div class="action-desc">Reload data</div>
                                    </div>
                                </button>
                                <button class="action-card warning" onclick="window.simpleFormSubmit.clearLocalStorage()">
                                    <div class="action-icon">
                                        <i class="fas fa-trash-alt"></i>
                                    </div>
                                    <div class="action-content">
                                        <div class="action-title">Clear Data</div>
                                        <div class="action-desc">Remove local storage</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Right Column: Recent Activity -->
                    <div class="admin-right-column">
                        <div class="activity-section">
                            <div class="section-title">
                                <i class="fas fa-history"></i>
                                <span>Recent Activity</span>
                            </div>
                            <div class="activity-content">
                                <div class="responses-list" id="recentResponses">
                                    <div class="loading-placeholder">
                                        <i class="fas fa-spinner fa-spin"></i>
                                        <span>Loading responses...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Insightful Metrics Section -->
                <div class="insights-section">
                    <div class="dropdown-section">
                        <div class="dropdown-header" onclick="window.simpleFormSubmit.toggleInsightsDropdown()">
                            <div class="dropdown-title">
                                <i class="fas fa-chart-pie"></i>
                                <span>Detailed Insights</span>
                                <div class="disabled-badge">Disabled</div>
                            </div>
                            <div class="dropdown-arrow">
                                <i class="fas fa-chevron-down"></i>
                            </div>
                        </div>
                        <div class="dropdown-content" id="insightfulMetrics" style="display: none;">
                            <div class="loading-placeholder">
                                <i class="fas fa-spinner fa-spin"></i>
                                <span>Loading insights...</span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        `;
        
        // Add to main content
        document.querySelector('.main-content').appendChild(adminView);
        
        // Add admin styles
        this.addAdminStyles();
    }

    addAdminStyles() {
        const style = document.createElement('style');
        style.textContent = `
            #adminView {
                background: #f8f9fa;
                min-height: 100vh;
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            
            .admin-container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 2rem;
            }
            
            .admin-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 2rem;
                padding: 2rem 2.5rem;
                background: #ffffff;
                border-radius: 8px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                border: 1px solid #e2e8f0;
            }
            
            .admin-header-left h1 {
                color: #2d3748;
                margin: 0 0 0.5rem 0;
                font-size: 2.25rem;
                font-weight: 700;
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .admin-subtitle {
                color: #718096;
                margin: 0;
                font-size: 1rem;
                font-weight: 500;
                margin-left: 2.5rem;
            }
            
            .admin-header-right {
                display: flex;
                gap: 12px;
            }
            
            .admin-grid {
                display: grid;
                grid-template-columns: 1fr 400px;
                gap: 2rem;
                align-items: start;
            }
            
            .admin-left-column {
                display: flex;
                flex-direction: column;
                gap: 2rem;
            }
            
            .admin-right-column {
                display: flex;
                flex-direction: column;
                gap: 2rem;
            }
            
            .section-title {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                margin-bottom: 1.5rem;
                color: #2d3748;
                font-size: 1.1rem;
                font-weight: 600;
            }
            
            .stats-section, .actions-section, .activity-section, .insights-section {
                background: #ffffff;
                border-radius: 8px;
                padding: 2rem;
                box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                border: 1px solid #e2e8f0;
            }
            
            .insights-section {
                margin-top: 2rem;
            }
            
            .stats-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1.5rem;
            }
            
            .actions-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                gap: 1rem;
            }
            
            .admin-section {
                background: rgba(255, 255, 255, 0.95);
                border-radius: 20px;
                padding: 2rem;
                margin-bottom: 1.5rem;
                box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255,255,255,0.2);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            
            .admin-section:hover {
                transform: translateY(-5px);
                box-shadow: 0 15px 40px rgba(0,0,0,0.12);
            }
            
            .admin-section h2 {
                color: #2d3748;
                margin-top: 0;
                margin-bottom: 1.5rem;
                font-size: 1.25rem;
                font-weight: 600;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .admin-stats {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1.5rem;
                margin-bottom: 2rem;
            }
            
            .stat-card {
                display: flex;
                align-items: center;
                padding: 1.5rem;
                border-radius: 8px;
                border: 1px solid #e2e8f0;
                background: #ffffff;
            }
            
            .stat-card.primary {
                border-color: #667eea;
                background: #f7fafc;
            }
            
            .stat-card.success {
                border-color: #48bb78;
                background: #f0fff4;
            }
            
            .stat-card.info {
                border-color: #4299e1;
                background: #ebf8ff;
            }
            
            .stat-icon {
                width: 60px;
                height: 60px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 1rem;
                font-size: 1.5rem;
            }
            
            .stat-card.primary .stat-icon {
                background: #667eea;
                color: white;
            }
            
            .stat-card.success .stat-icon {
                background: #48bb78;
                color: white;
            }
            
            .stat-card.info .stat-icon {
                background: #4299e1;
                color: white;
            }
            
            .stat-content {
                flex: 1;
            }
            
            .stat-number {
                font-size: 2.25rem;
                font-weight: 700;
                margin-bottom: 0.25rem;
                line-height: 1;
                color: #2d3748;
            }
            
            .stat-label {
                font-size: 0.9rem;
                font-weight: 500;
                color: #718096;
            }
            
            .action-card {
                display: flex;
                align-items: center;
                padding: 1.25rem;
                border-radius: 8px;
                border: 1px solid #e2e8f0;
                cursor: pointer;
                text-align: left;
                background: #ffffff;
            }
            
            .action-card:hover {
                border-color: #cbd5e0;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }
            
            .action-card.primary:hover {
                border-color: #667eea;
            }
            
            .action-card.secondary:hover {
                border-color: #718096;
            }
            
            .action-card.info:hover {
                border-color: #4299e1;
            }
            
            .action-card.warning:hover {
                border-color: #ed8936;
            }
            
            .action-icon {
                width: 40px;
                height: 40px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 1rem;
                font-size: 1.1rem;
            }
            
            .action-card.primary .action-icon {
                background: #667eea;
                color: white;
            }
            
            .action-card.secondary .action-icon {
                background: #718096;
                color: white;
            }
            
            .action-card.info .action-icon {
                background: #4299e1;
                color: white;
            }
            
            .action-card.warning .action-icon {
                background: #ed8936;
                color: white;
            }
            
            .action-content {
                flex: 1;
            }
            
            .action-title {
                font-size: 0.95rem;
                font-weight: 600;
                color: #2d3748;
                margin-bottom: 0.25rem;
            }
            
            .action-desc {
                font-size: 0.8rem;
                color: #718096;
            }
            
            .activity-content {
                min-height: 500px;
            }
            
            .admin-actions, .data-actions {
                display: flex;
                gap: 1rem;
                flex-wrap: wrap;
            }
            
            .btn {
                padding: 0.75rem 1.5rem;
                border: none;
                border-radius: 12px;
                cursor: pointer;
                font-size: 0.9rem;
                font-weight: 500;
                display: inline-flex;
                align-items: center;
                gap: 8px;
                transition: all 0.3s ease;
                text-decoration: none;
                position: relative;
                overflow: hidden;
            }
            

            
            .btn-primary { 
                background: #667eea;
                color: white;
                border: 1px solid #667eea;
            }
            
            .btn-secondary { 
                background: #6c757d;
                color: white;
                border: 1px solid #6c757d;
            }
            
            .btn-info { 
                background: #17a2b8;
                color: white;
                border: 1px solid #17a2b8;
            }
            
            .btn-warning { 
                background: #ffc107;
                color: #212529;
                border: 1px solid #ffc107;
            }
            
            .btn:hover {
                opacity: 0.9;
            }
            
            .responses-list {
                max-height: 400px;
                overflow-y: auto;
                border-radius: 8px;
                padding: 1rem;
                background: #f8f9fa;
                border: 1px solid #e2e8f0;
            }
            
            .response-item {
                padding: 1rem;
                border-bottom: 1px solid #e2e8f0;
                margin-bottom: 1rem;
                border-radius: 8px;
                background: #ffffff;
            }
            
            .response-item:hover {
                background: #f7fafc;
            }
            
            .response-item:last-child {
                border-bottom: none;
                margin-bottom: 0;
            }
            
            .response-item strong {
                color: #2d3748;
                font-weight: 600;
            }
            
            .response-item small {
                color: #718096;
                font-size: 0.85rem;
            }
            
            .loading-placeholder {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: #a0aec0;
                font-style: italic;
                padding: 3rem;
                gap: 1rem;
            }
            
            .loading-placeholder i {
                font-size: 2rem;
                color: #cbd5e0;
            }
            
            /* Insightful Metrics Styles */
            .metrics-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1.5rem;
                margin-top: 1rem;
            }
            
            .metric-card {
                background: #f8f9fa;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                padding: 1.5rem;
            }
            
            .metric-header {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                margin-bottom: 1rem;
                font-weight: 600;
                color: #2d3748;
            }
            
            .metric-header i {
                color: #667eea;
                font-size: 1.1rem;
            }
            
            .metric-content {
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
            }
            
            .metric-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.5rem 0;
                border-bottom: 1px solid #e2e8f0;
            }
            
            .metric-item:last-child {
                border-bottom: none;
            }
            
            .metric-label {
                font-size: 0.9rem;
                color: #4a5568;
            }
            
            .metric-value {
                font-weight: 600;
                color: #2d3748;
                background: #e2e8f0;
                padding: 0.25rem 0.5rem;
                border-radius: 4px;
                font-size: 0.85rem;
            }
            
            /* Enhanced Response Items */
            .response-item.enhanced {
                background: #ffffff;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                padding: 1.25rem;
                margin-bottom: 1rem;
            }
            
            .response-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1rem;
            }
            
            .response-company {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-weight: 600;
                color: #2d3748;
            }
            
            .response-company i {
                color: #667eea;
            }
            
            .response-time {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-size: 0.85rem;
                color: #718096;
            }
            
            .response-details {
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
                margin-bottom: 1rem;
            }
            
            .response-detail {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-size: 0.85rem;
                color: #4a5568;
            }
            
            .response-detail i {
                color: #718096;
                width: 12px;
            }
            
            .response-actions {
                display: flex;
                justify-content: flex-end;
            }
            
            .response-action-btn {
                background: #667eea;
                color: white;
                border: none;
                padding: 0.5rem 1rem;
                border-radius: 6px;
                font-size: 0.85rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .response-action-btn:hover {
                background: #5a67d8;
            }
            
            /* Response Detail Popup Styles */
            .response-detail-popup {
                max-width: 95%;
                max-height: 90%;
                overflow-y: auto;
                width: 1200px;
                min-height: 600px;
            }
            
            .response-detail-content {
                padding: 1.5rem;
                max-height: calc(90vh - 120px);
                overflow-y: auto;
            }
            
            .detail-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                gap: 1.5rem;
            }
            
            .detail-item {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                padding: 0.75rem;
                background: #f8f9fa;
                border-radius: 8px;
                border: 1px solid #e2e8f0;
            }
            
            .detail-item.full-width {
                grid-column: 1 / -1;
            }
            
            .detail-item.metadata {
                grid-column: span 1;
                min-width: 200px;
                padding: 0.5rem 0.75rem;
                background: #e8f4fd;
                border-color: #bee3f8;
            }
            
            /* Section styling for better organization */
            .company-info-section, .positions-info-section {
                margin-bottom: 2rem;
                padding: 1.5rem;
                background: #ffffff;
                border-radius: 12px;
                border: 1px solid #e2e8f0;
                box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            }
            
            .company-info-section h3, .positions-info-section h3 {
                margin: 0 0 1.5rem 0;
                color: #2d3748;
                font-size: 1.1rem;
                font-weight: 600;
                display: flex;
                align-items: center;
                gap: 0.75rem;
                padding-bottom: 0.75rem;
                border-bottom: 2px solid #e2e8f0;
            }
            
            .company-info-section h3 i {
                color: #667eea;
                font-size: 1rem;
            }
            
            .positions-info-section h3 i {
                color: #f56565;
                font-size: 1rem;
            }
            
            @media (max-width: 768px) {
                .detail-grid {
                    grid-template-columns: 1fr;
                    gap: 0.75rem;
                }
                
                .detail-item {
                    padding: 0.5rem;
                }
                
                .detail-item.metadata {
                    padding: 0.4rem 0.6rem;
                    min-width: auto;
                }
                
                .company-info-section, .positions-info-section {
                    margin-bottom: 1.5rem;
                    padding: 1rem;
                }
                
                .response-detail-popup {
                    width: 95%;
                    max-width: 95%;
                }
                
                .detail-grid {
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }
            }
            
            .detail-item label {
                font-weight: 600;
                color: #2d3748;
                font-size: 0.9rem;
            }
            
            .detail-item span {
                color: #4a5568;
                font-size: 0.95rem;
                line-height: 1.4;
            }
            
            .close-btn {
                background: #e53e3e;
                color: white;
                border: none;
                padding: 0.5rem 1rem;
                border-radius: 6px;
                cursor: pointer;
                font-size: 1.2rem;
                font-weight: bold;
            }
            
            .close-btn:hover {
                background: #c53030;
            }
            
            /* Responses List Popup Styles */
            .responses-list-popup {
                max-width: 95%;
                max-height: 90%;
                overflow-y: auto;
                width: 1000px;
            }
            
            .responses-list-content {
                padding: 1rem;
            }
            
            .responses-table {
                display: flex;
                flex-direction: column;
                gap: 1px;
                background: #e2e8f0;
                border-radius: 8px;
                overflow: hidden;
            }
            
            .table-header {
                display: grid;
                grid-template-columns: 2fr 1.5fr 1fr 1.5fr 1fr;
                background: #4a5568;
                color: white;
                font-weight: 600;
            }
            
            .table-row {
                display: grid;
                grid-template-columns: 2fr 1.5fr 1fr 1.5fr 1fr;
                background: white;
            }
            
            .table-row:hover {
                background: #f7fafc;
            }
            
            .table-cell {
                padding: 1rem;
                display: flex;
                align-items: center;
                font-size: 0.9rem;
            }
            
            .table-action-btn {
                background: #667eea;
                color: white;
                border: none;
                padding: 0.5rem;
                border-radius: 4px;
                cursor: pointer;
                font-size: 0.85rem;
            }
            
            .table-action-btn:hover {
                background: #5a67d8;
            }
            
            /* Responsive Design */
            @media (max-width: 1200px) {
                .admin-grid {
                    grid-template-columns: 1fr;
                    gap: 2rem;
                }
                
                .admin-right-column {
                    order: -1;
                }
            }
            
            @media (max-width: 768px) {
                .admin-container {
                    padding: 1rem;
                }
                
                .admin-header {
                    flex-direction: column;
                    gap: 1.5rem;
                    text-align: center;
                    padding: 1.5rem;
                }
                
                .admin-header-left h1 {
                    font-size: 1.75rem;
                }
                
                .admin-subtitle {
                    margin-left: 0;
                    text-align: center;
                }
                
                .stats-grid {
                    grid-template-columns: 1fr;
                }
                
                .actions-grid {
                    grid-template-columns: 1fr;
                }
                
                .stat-card, .action-card {
                    padding: 1.25rem;
                }
                
                .activity-content {
                    min-height: 300px;
                }
            }

            /* Cool Dropdown Styles for Insights */
            .dropdown-section {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                transition: all 0.3s ease;
            }

            .dropdown-section:hover {
                transform: translateY(-2px);
                box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
            }

            .dropdown-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 1.5rem 2rem;
                cursor: pointer;
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                transition: all 0.2s ease;
            }

            .dropdown-header:hover {
                background: rgba(255, 255, 255, 0.15);
            }

            .dropdown-title {
                display: flex;
                align-items: center;
                gap: 1rem;
                color: white;
                font-weight: 600;
                font-size: 1.1rem;
            }

            .dropdown-title i {
                font-size: 1.3rem;
                opacity: 0.9;
            }

            .disabled-badge {
                background: rgba(255, 255, 255, 0.2);
                color: white;
                padding: 0.3rem 0.8rem;
                border-radius: 20px;
                font-size: 0.8rem;
                font-weight: 500;
                margin-left: 1rem;
                backdrop-filter: blur(5px);
                border: 1px solid rgba(255, 255, 255, 0.3);
            }

            .dropdown-arrow {
                color: white;
                font-size: 1.2rem;
                transition: transform 0.3s ease;
            }

            .dropdown-content {
                background: white;
                padding: 2rem;
                max-height: 500px;
                overflow-y: auto;
                transition: all 0.3s ease;
            }

            /* Enhanced disabled metrics styling */
            .disabled-metrics {
                opacity: 0.6;
                pointer-events: none;
            }

            .metric-card.disabled {
                background: #f8f9fa;
                border: 1px dashed #dee2e6;
                opacity: 0.7;
            }

            .metric-card.disabled .metric-header {
                color: #6c757d;
            }

            .metric-card.disabled .metric-value {
                color: #adb5bd;
                font-style: italic;
            }

            .metric-card.disabled .metric-label {
                color: #6c757d;
            }

            /* Animation for smooth transitions */
            @keyframes slideDown {
                from {
                    opacity: 0;
                    max-height: 0;
                    transform: translateY(-10px);
                }
                to {
                    opacity: 1;
                    max-height: 500px;
                    transform: translateY(0);
                }
            }

            .dropdown-content[style*="display: block"] {
                animation: slideDown 0.3s ease forwards;
            }
        `;
        
        document.head.appendChild(style);
    }

    async loadAdminData() {
        console.log('Loading admin data...');
        
        // Show loading state
        this.showLoadingState();
        
        try {
            let responses = [];
            
            // Try Firebase first
            if (window.firebaseConfig && window.firebaseConfig.getCollection) {
                console.log('Attempting Firebase connection...');
                console.log('Trying entrepreneur-surveys collection first...');
                let result = await window.firebaseConfig.getCollection('entrepreneur-surveys');
                console.log('entrepreneur-surveys result:', result);
                
                // If no data found, try alternative collection name
                if (!result || !result.success || !result.data || result.data.length === 0) {
                    console.log('No data in entrepreneur-surveys, trying entrepreneur-assessments...');
                    result = await window.firebaseConfig.getCollection('entrepreneur-assessments');
                    console.log('entrepreneur-assessments result:', result);
                }
                
                if (result && result.success && result.data && result.data.length > 0) {
                    responses = result.data;
                    console.log('Firebase data loaded:', responses.length, 'responses from Firebase');
                    console.log('Sample response structure:', responses[0] ? Object.keys(responses[0]) : 'No responses');
                } else {
                    console.log('No Firebase data found in either collection, trying localStorage...');
                }
            } else {
                console.log('Firebase not available, using localStorage...');
            }
            
            // Always try localStorage as fallback
            if (responses.length === 0) {
                console.log('Checking localStorage for data...');
                let localData = JSON.parse(localStorage.getItem('entrepreneur-submissions') || '[]');
                console.log('entrepreneur-submissions found:', localData.length, 'items');
                
                // Also check alternative localStorage keys
                if (localData.length === 0) {
                    console.log('Checking alternative localStorage keys...');
                    const altData1 = JSON.parse(localStorage.getItem('bpn_pending_submissions') || '[]');
                    const altData2 = JSON.parse(localStorage.getItem('survey-responses') || '[]');
                    console.log('bpn_pending_submissions:', altData1.length, 'items');
                    console.log('survey-responses:', altData2.length, 'items');
                    localData = [...altData1, ...altData2];
                }
                responses = localData;
                console.log('Using localStorage data:', responses.length, 'responses');
            }
            
            // Store responses for other methods
            this.currentResponses = responses;
            
            // Update all dashboard components
            this.updateAnalytics(responses);
            this.displayRecentResponses(responses);
            this.updateInsightfulMetrics(responses);
            
            console.log('Admin data loading complete');
            
        } catch (error) {
            console.error('Error loading admin data:', error);
            this.showErrorState();
        }
    }

    updateAnalytics(responses) {
        // Calculate meaningful metrics for entrepreneur assessment
        const totalEntrepreneurs = responses.length;
        const totalChallenges = this.calculateTotalChallenges(responses);
        const topChallenge = this.getTopChallenge(responses);
        const readyCommitted = this.getReadyCommitted(responses);
        
        // Update display - use correct element IDs
        const totalEntrepreneursEl = document.getElementById('totalEntrepreneurs');
        const totalChallengesEl = document.getElementById('totalChallenges');
        const topChallengeEl = document.getElementById('topChallenge');
        const readyCommittedEl = document.getElementById('readyCommitted');
        
        if (totalEntrepreneursEl) totalEntrepreneursEl.textContent = totalEntrepreneurs;
        if (totalChallengesEl) totalChallengesEl.textContent = totalChallenges;
        if (topChallengeEl) topChallengeEl.textContent = topChallenge;
        if (readyCommittedEl) readyCommittedEl.textContent = readyCommitted;
        
        console.log('Analytics updated:', { totalEntrepreneurs, totalChallenges, topChallenge, readyCommitted });
        
        // Add click handlers for detailed popups
        this.addAnalyticsClickHandlers(responses);
        
        // Store responses for other methods
        this.currentResponses = responses;
    }
    
    addAnalyticsClickHandlers(responses) {
        // Make analytics cards clickable
        const totalEntrepreneursEl = document.getElementById('totalEntrepreneurs');
        const totalChallengesEl = document.getElementById('totalChallenges');
        const topChallengeEl = document.getElementById('topChallenge');
        const readyCommittedEl = document.getElementById('readyCommitted');
        
        const totalEntrepreneursCard = totalEntrepreneursEl ? totalEntrepreneursEl.closest('.stat-card') : null;
        const totalChallengesCard = totalChallengesEl ? totalChallengesEl.closest('.stat-card') : null;
        const topChallengeCard = topChallengeEl ? topChallengeEl.closest('.stat-card') : null;
        const readyCommittedCard = readyCommittedEl ? readyCommittedEl.closest('.stat-card') : null;
        
        if (totalEntrepreneursCard) {
            totalEntrepreneursCard.style.cursor = 'pointer';
            totalEntrepreneursCard.onclick = () => this.showEntrepreneursDetailPopup(responses);
        }
        
        if (totalChallengesCard) {
            totalChallengesCard.style.cursor = 'pointer';
            totalChallengesCard.onclick = () => this.showChallengesDetailPopup(responses);
        }
        
        if (topChallengeCard) {
            topChallengeCard.style.cursor = 'pointer';
            topChallengeCard.onclick = () => this.showTopChallengeDetailPopup(responses);
        }
        
        if (readyCommittedCard) {
            readyCommittedCard.style.cursor = 'pointer';
            readyCommittedCard.onclick = () => this.showReadyCommittedDetailPopup(responses);
        }
        
        console.log('Analytics click handlers added');
    }
    
    showEmployersDetailPopup(responses) {
        const popup = document.createElement('div');
        popup.className = 'notification-overlay';
        popup.innerHTML = `
            <div class="notification-popup analytics-detail-popup">
                <div class="notification-header">
                    <h2><i class="fas fa-building"></i> Registered Employers Details</h2>
                    <button onclick="this.closest('.notification-overlay').remove()" class="close-btn">×</button>
                </div>
                <div class="analytics-detail-content">
                    <div class="detail-summary">
                        <div class="summary-stat">
                            <span class="stat-label">Total Employers</span>
                            <span class="stat-value">${responses.length}</span>
                        </div>
                        <div class="summary-stat">
                            <span class="stat-label">Today's Registrations</span>
                            <span class="stat-value">${this.getTodayResponseCount(responses)}</span>
                        </div>
                    </div>
                    <div class="detail-breakdown">
                        <h3>Recent Employers</h3>
                        <div class="employers-list">
                            ${responses.slice(-10).reverse().map(response => `
                                <div class="employer-item">
                                    <div class="employer-info">
                                        <div class="employer-name">${response.companyName || 'Unknown Company'}</div>
                                        <div class="employer-industry">${response.industry || 'Not specified'}</div>
                                    </div>
                                    <div class="employer-date">${this.getRelativeTime(response.timestamp || response.submittedAt)}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(popup);
        setTimeout(() => popup.classList.add('show'), 100);
    }
    
    showPositionsDetailPopup(responses) {
        const totalPositions = this.calculateTotalPositions(responses);
        const positionsByCompany = responses.map(response => ({
            company: response.companyName || 'Unknown',
            positions: response.positionsAvailable || response.numberOfPositions || 1,
            jobTitle: response.jobTitle || 'Not specified'
        }));
        
        const popup = document.createElement('div');
        popup.className = 'notification-overlay';
        popup.innerHTML = `
            <div class="notification-popup analytics-detail-popup">
                <div class="notification-header">
                    <h2><i class="fas fa-users"></i> Job Openings Details</h2>
                    <button onclick="this.closest('.notification-overlay').remove()" class="close-btn">×</button>
                </div>
                <div class="analytics-detail-content">
                    <div class="detail-summary">
                        <div class="summary-stat">
                            <span class="stat-label">Total Job Openings</span>
                            <span class="stat-value">${totalPositions}</span>
                        </div>
                        <div class="summary-stat">
                            <span class="stat-label">Average per Company</span>
                            <span class="stat-value">${Math.round(totalPositions / responses.length)}</span>
                        </div>
                    </div>
                    <div class="detail-breakdown">
                        <h3>Positions by Company</h3>
                        <div class="positions-list">
                            ${positionsByCompany.map(item => `
                                <div class="position-item">
                                    <div class="position-info">
                                        <div class="position-company">${item.company}</div>
                                        <div class="position-title">${item.jobTitle}</div>
                                    </div>
                                    <div class="position-count">${item.positions} ${item.positions == 1 ? 'position' : 'positions'}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(popup);
        setTimeout(() => popup.classList.add('show'), 100);
    }
    
    showIndustryDetailPopup(responses) {
        const industryBreakdown = this.getIndustryBreakdown(responses);
        const topIndustry = this.getTopIndustry(responses);
        
        const popup = document.createElement('div');
        popup.className = 'notification-overlay';
        popup.innerHTML = `
            <div class="notification-popup analytics-detail-popup">
                <div class="notification-header">
                    <h2><i class="fas fa-industry"></i> Top Industry Details</h2>
                    <button onclick="this.closest('.notification-overlay').remove()" class="close-btn">×</button>
                </div>
                <div class="analytics-detail-content">
                    <div class="detail-summary">
                        <div class="summary-stat">
                            <span class="stat-label">Leading Industry</span>
                            <span class="stat-value">${topIndustry}</span>
                        </div>
                        <div class="summary-stat">
                            <span class="stat-label">Total Industries</span>
                            <span class="stat-value">${industryBreakdown.length}</span>
                        </div>
                    </div>
                    <div class="detail-breakdown">
                        <h3>Industry Breakdown</h3>
                        <div class="industry-list">
                            ${industryBreakdown.map(industry => `
                                <div class="industry-item">
                                    <div class="industry-info">
                                        <div class="industry-name">${industry.name}</div>
                                        <div class="industry-percentage">${((industry.count / responses.length) * 100).toFixed(1)}%</div>
                                    </div>
                                    <div class="industry-count">${industry.count} ${industry.count == 1 ? 'employer' : 'employers'}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(popup);
        setTimeout(() => popup.classList.add('show'), 100);
    }
    
    showUrgentHiringDetailPopup(responses) {
        const urgentHiring = this.getUrgentHiring(responses);
        const urgentEmployers = responses.filter(response => {
            const startDate = this.getFieldValue(response, 'startDate', '');
            const additionalNotes = (this.getFieldValue(response, 'additionalNotes', '') || '').toLowerCase();
            
            if (startDate) {
                try {
                    const start = new Date(startDate);
                    if (!isNaN(start.getTime())) {
                        const now = new Date();
                        const diffMonths = (start - now) / (1000 * 60 * 60 * 24 * 30);
                        if (diffMonths <= 3) return true;
                    }
                } catch (error) {
                    // Invalid date, skip this check
                }
            }
            
            return additionalNotes.includes('urgent') || 
                   additionalNotes.includes('immediate') ||
                   additionalNotes.includes('asap') ||
                   additionalNotes.includes('soon') ||
                   additionalNotes.includes('quickly');
        });
        
        const popup = document.createElement('div');
        popup.className = 'notification-overlay';
        popup.innerHTML = `
            <div class="notification-popup analytics-detail-popup">
                <div class="notification-header">
                    <h2><i class="fas fa-clock"></i> Urgent Hiring Details</h2>
                    <button onclick="this.closest('.notification-overlay').remove()" class="close-btn">×</button>
                </div>
                <div class="analytics-detail-content">
                    <div class="detail-summary">
                        <div class="summary-stat">
                            <span class="stat-label">Urgent Hiring</span>
                            <span class="stat-value">${urgentHiring}</span>
                        </div>
                        <div class="summary-stat">
                            <span class="stat-label">Urgency Rate</span>
                            <span class="stat-value">${((urgentHiring / responses.length) * 100).toFixed(1)}%</span>
                        </div>
                    </div>
                    <div class="detail-breakdown">
                        <h3>Employers with Urgent Needs</h3>
                        <div class="urgent-list">
                            ${urgentEmployers.length > 0 ? urgentEmployers.map(employer => `
                                <div class="urgent-item">
                                    <div class="urgent-info">
                                        <div class="urgent-company">${employer.companyName || 'Unknown'}</div>
                                        <div class="urgent-position">${this.getFieldValue(employer, 'jobTitle')}</div>
                                        <div class="urgent-start">${this.getFieldValue(employer, 'startDate', '') ? 'Start: ' + this.formatDate(this.getFieldValue(employer, 'startDate')) : 'Immediate start needed'}</div>
                                    </div>
                                    <div class="urgent-indicator">
                                        <i class="fas fa-exclamation-triangle"></i>
                                        Urgent
                                    </div>
                                </div>
                            `).join('') : '<div class="no-urgent">No urgent hiring needs at the moment</div>'}
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(popup);
        setTimeout(() => popup.classList.add('show'), 100);
    }
    
    calculateTotalChallenges(responses) {
        // Calculate total business challenges from all entrepreneur responses
        return responses.reduce((total, response) => {
            if (response.topChallenges && Array.isArray(response.topChallenges)) {
                return total + response.topChallenges.length;
            }
            // Each entrepreneur has at least one challenge
            return total + 1;
        }, 0);
    }

    getTopChallenge(responses) {
        if (responses.length === 0) return '-';
        
        // Count challenge types
        const challengeCount = {};
        responses.forEach(response => {
            if (response.topChallenges && Array.isArray(response.topChallenges)) {
                response.topChallenges.forEach(challenge => {
                    const cleanChallenge = challenge.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase());
                    challengeCount[cleanChallenge] = (challengeCount[cleanChallenge] || 0) + 1;
                });
            }
        });
        
        // Find top challenge
        const topChallenge = Object.entries(challengeCount)
            .sort(([,a], [,b]) => b - a)[0];
        
        return topChallenge ? topChallenge[0] : '-';
    }

    getReadyCommitted(responses) {
        // Count entrepreneurs who are ready and committed to expert support
        return responses.filter(response => {
            const commitment = response.readyToParticipate || '';
            return commitment === 'yes-ready-committed';
        }).length;
    }

    getTodayResponseCount(responses) {
        const today = new Date().toDateString();
        return responses.filter(r => {
            const timestamp = r.timestamp || r.submittedAt || r.createdAt;
            if (!timestamp) return false;
            try {
                return new Date(timestamp).toDateString() === today;
            } catch (error) {
                return false;
            }
        }).length;
    }

    // New breakdown methods for entrepreneur survey data
    getChallengesBreakdown(responses) {
        const breakdown = {};
        responses.forEach(response => {
            if (response.topChallenges && Array.isArray(response.topChallenges)) {
                response.topChallenges.forEach(challenge => {
                    const cleanChallenge = challenge.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase());
                    breakdown[cleanChallenge] = (breakdown[cleanChallenge] || 0) + 1;
                });
            }
        });
        return Object.entries(breakdown)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count);
    }

    getDecisionMakingBreakdown(responses) {
        const breakdown = {};
        responses.forEach(response => {
            const approach = response.decisionMaking || 'Not specified';
            const cleanApproach = approach.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase());
            breakdown[cleanApproach] = (breakdown[cleanApproach] || 0) + 1;
        });
        return Object.entries(breakdown)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count);
    }

    getCommitmentBreakdown(responses) {
        const breakdown = {};
        responses.forEach(response => {
            const commitment = response.readyToParticipate || 'Not specified';
            let cleanCommitment;
            switch(commitment) {
                case 'yes-ready-committed':
                    cleanCommitment = 'Yes, ready and committed';
                    break;
                case 'maybe-understand-more':
                    cleanCommitment = 'Maybe, want to understand more';
                    break;
                case 'no-not-at-moment':
                    cleanCommitment = 'No, not at the moment';
                    break;
                default:
                    cleanCommitment = 'Not specified';
            }
            breakdown[cleanCommitment] = (breakdown[cleanCommitment] || 0) + 1;
        });
        return Object.entries(breakdown)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count);
    }

    getGrowthLimitedCount(responses) {
        return responses.filter(response => {
            const growth = response.businessGrowthLimited || '';
            return growth === 'yes-often';
        }).length;
    }

    getAverageCompletionTime(responses) {
        if (responses.length === 0) return 0;
        const avgMs = responses.reduce((sum, r) => sum + (r.completionTime || 0), 0) / responses.length;
        return Math.round(avgMs / 60000); // Convert to minutes
    }
    
    updateInsightfulMetrics(responses) {
        console.log('Updating insightful metrics with', responses.length, 'responses');
        
        const existingMetrics = document.getElementById('insightfulMetrics');
        if (!existingMetrics) {
            console.log('insightfulMetrics element not found');
            return;
        }
        
        if (responses.length === 0) {
            existingMetrics.innerHTML = `
                <div class="loading-placeholder">
                    <i class="fas fa-info-circle"></i>
                    <span>No data available for insights</span>
                </div>
            `;
            return;
        }
        
        // Generate and display metrics
        const metricsHtml = this.generateInsightfulMetrics(responses);
        existingMetrics.innerHTML = metricsHtml;
        console.log('Insightful metrics updated');
    }
    
    generateInsightfulMetrics(responses) {
        // Data collection still happens but display is disabled
        const industryStats = this.getIndustryBreakdown(responses);
        const experienceStats = this.getExperienceLevelBreakdown(responses);
        const workModeStats = this.getWorkModeBreakdown(responses);
        const salaryStats = this.getSalaryRangeBreakdown(responses);
        const responseTimeStats = this.getResponseTimeAnalysis(responses);
        
        return `
            <div class="metrics-grid disabled-metrics">
                <div class="metric-card disabled">
                    <div class="metric-header">
                        <i class="fas fa-industry"></i>
                        <span>Top Industries</span>
                    </div>
                    <div class="metric-content">
                        <div class="metric-item">
                            <span class="metric-label">Not specified</span>
                            <span class="metric-value">2</span>
                        </div>
                    </div>
                </div>
                
                <div class="metric-card disabled">
                    <div class="metric-header">
                        <i class="fas fa-user-graduate"></i>
                        <span>Experience Levels</span>
                    </div>
                    <div class="metric-content">
                        <div class="metric-item">
                            <span class="metric-label">Not specified</span>
                            <span class="metric-value">2</span>
                        </div>
                    </div>
                </div>
                
                <div class="metric-card disabled">
                    <div class="metric-header">
                        <i class="fas fa-home"></i>
                        <span>Work Modes</span>
                    </div>
                    <div class="metric-content">
                        <div class="metric-item">
                            <span class="metric-label">Not specified</span>
                            <span class="metric-value">2</span>
                        </div>
                    </div>
                </div>
                
                <div class="metric-card disabled">
                    <div class="metric-header">
                        <i class="fas fa-money-bill-wave"></i>
                        <span>Salary Ranges</span>
                    </div>
                    <div class="metric-content">
                        <div class="metric-item">
                            <span class="metric-label">Not specified</span>
                            <span class="metric-value">2</span>
                        </div>
                    </div>
                </div>
                
                <div class="metric-card disabled">
                    <div class="metric-header">
                        <i class="fas fa-clock"></i>
                        <span>Response Trends</span>
                    </div>
                    <div class="metric-content">
                        <div class="metric-item">
                            <span class="metric-label">Peak Hour</span>
                            <span class="metric-value">NaN:00</span>
                        </div>
                        <div class="metric-item">
                            <span class="metric-label">This Week</span>
                            <span class="metric-value">0</span>
                        </div>
                        <div class="metric-item">
                            <span class="metric-label">Growth</span>
                            <span class="metric-value">0%</span>
                        </div>
                    </div>
                </div>
                
                <div class="metric-card disabled">
                    <div class="metric-header">
                        <i class="fas fa-briefcase"></i>
                        <span>Job Types</span>
                    </div>
                    <div class="metric-content">
                        <div class="metric-item">
                            <span class="metric-label">Not specified</span>
                            <span class="metric-value">2</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    getIndustryBreakdown(responses) {
        const breakdown = {};
        responses.forEach(r => {
            const industry = r.industry || 'Not specified';
            breakdown[industry] = (breakdown[industry] || 0) + 1;
        });
        return Object.entries(breakdown)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count);
    }
    
    getCompanySizeBreakdown(responses) {
        const breakdown = {};
        responses.forEach(r => {
            const size = r.companySize || 'Not specified';
            breakdown[size] = (breakdown[size] || 0) + 1;
        });
        return Object.entries(breakdown)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count);
    }
    
    getExperienceLevelBreakdown(responses) {
        const breakdown = {};
        responses.forEach(r => {
            const level = this.getFieldValue(r, 'experienceLevel');
            breakdown[level] = (breakdown[level] || 0) + 1;
        });
        return Object.entries(breakdown)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count);
    }
    
    getWorkModeBreakdown(responses) {
        const breakdown = {};
        responses.forEach(r => {
            const mode = this.getFieldValue(r, 'workMode');
            breakdown[mode] = (breakdown[mode] || 0) + 1;
        });
        return Object.entries(breakdown)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count);
    }
    
    getSalaryRangeBreakdown(responses) {
        const breakdown = {};
        responses.forEach(r => {
            const range = this.getFieldValue(r, 'salaryRange');
            breakdown[range] = (breakdown[range] || 0) + 1;
        });
        return Object.entries(breakdown)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count);
    }
    
    getJobTypeBreakdown(responses) {
        const breakdown = {};
        responses.forEach(r => {
            const type = this.getFieldValue(r, 'workType');
            breakdown[type] = (breakdown[type] || 0) + 1;
        });
        return Object.entries(breakdown)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count);
    }
    
    getResponseTimeAnalysis(responses) {
        const hourCounts = {};
        let thisWeekCount = 0;
        let lastWeekCount = 0;
        
        const now = new Date();
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);
        
        responses.forEach(r => {
            const date = new Date(r.timestamp);
            const hour = date.getHours();
            hourCounts[hour] = (hourCounts[hour] || 0) + 1;
            
            if (date > weekAgo) thisWeekCount++;
            else if (date > twoWeeksAgo) lastWeekCount++;
        });
        
        const peakHour = Object.entries(hourCounts)
            .sort(([,a], [,b]) => b - a)[0]?.[0] || 0;
        
        const growth = lastWeekCount > 0 ? Math.round(((thisWeekCount - lastWeekCount) / lastWeekCount) * 100) : 0;
        
        return {
            peakHour,
            thisWeek: thisWeekCount,
            growth: growth > 0 ? `+${growth}` : growth
        };
    }
    
    showLoadingState() {
        console.log('Showing loading state...');
        
        const elements = ['totalResponses', 'todayResponses', 'avgCompletionTime'];
        elements.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = '...';
                console.log('Set loading for', id);
            }
        });
        
        const recentResponses = document.getElementById('recentResponses');
        if (recentResponses) {
            recentResponses.innerHTML = `
                <div class="loading-placeholder">
                    <i class="fas fa-spinner fa-spin"></i>
                    <span>Loading responses...</span>
                </div>
            `;
        }
        
        const insightfulMetrics = document.getElementById('insightfulMetrics');
        if (insightfulMetrics) {
            insightfulMetrics.innerHTML = `
                <div class="loading-placeholder">
                    <i class="fas fa-spinner fa-spin"></i>
                    <span>Loading insights...</span>
                </div>
            `;
        }
    }
    
    showErrorState() {
        const elements = ['totalResponses', 'todayResponses', 'avgCompletionTime'];
        elements.forEach(id => {
            const element = document.getElementById(id);
            if (element) element.textContent = '0';
        });
        
        const recentResponses = document.getElementById('recentResponses');
        if (recentResponses) {
            recentResponses.innerHTML = `
                <div class="loading-placeholder">
                    <i class="fas fa-exclamation-triangle"></i>
                    <span>Error loading data</span>
                </div>
            `;
        }
    }

    displayRecentResponses(responses) {
        const container = document.getElementById('recentResponses');
        
        if (responses.length === 0) {
            container.innerHTML = `
                <div class="loading-placeholder">
                    <i class="fas fa-inbox"></i>
                    <span>No responses yet</span>
                </div>
            `;
            return;
        }
        
        const recent = responses.slice(-10).reverse(); // Last 10 responses
        
        container.innerHTML = recent.map((response, index) => `
            <div class="response-item enhanced">
                <div class="response-header">
                    <div class="response-company">
                        <i class="fas fa-user-tie"></i>
                        <strong>${response.entrepreneurName || 'Unknown Entrepreneur'}</strong>
                    </div>
                    <div class="response-time">
                        <i class="fas fa-clock"></i>
                        ${this.getRelativeTime(response.timestamp)}
                    </div>
                </div>
                <div class="response-details">
                    <div class="response-detail">
                        <i class="fas fa-building"></i>
                        <span>${response.companyName || 'Not specified'}</span>
                    </div>
                    <div class="response-detail">
                        <i class="fas fa-chart-line"></i>
                        <span>${this.getChallengeSummary(response)}</span>
                    </div>
                    <div class="response-detail">
                        <i class="fas fa-handshake"></i>
                        <span>${this.getCommitmentLevel(response)}</span>
                    </div>
                </div>
                <div class="response-actions">
                    <button class="response-action-btn" onclick="window.simpleFormSubmit.viewSingleResponse(${index})">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    getRelativeTime(timestamp) {
        const now = new Date();
        const date = new Date(timestamp);
        const diff = now - date;
        
        const minutes = Math.floor(diff / (1000 * 60));
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        
        if (minutes < 60) return `${minutes}m ago`;
        if (hours < 24) return `${hours}h ago`;
        if (days < 7) return `${days}d ago`;
        return date.toLocaleDateString();
    }
    
    getChallengeSummary(response) {
        if (response.topChallenges && Array.isArray(response.topChallenges)) {
            const first = response.topChallenges[0] ? response.topChallenges[0].replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase()) : '';
            const count = response.topChallenges.length;
            return count > 1 ? `${first} + ${count - 1} more` : first;
        }
        return 'Business growth challenges';
    }
    
    getCommitmentLevel(response) {
        const commitment = response.readyToParticipate || '';
        switch (commitment) {
            case 'yes-ready-committed':
                return 'Ready & Committed';
            case 'maybe-understand-more':
                return 'Wants to learn more';
            case 'no-not-at-moment':
                return 'Not ready yet';
            default:
                return 'Not specified';
        }
    }

    async exportResponses() {
        console.log('Export button clicked');
        
        // Check if XLSX is loaded
        if (typeof XLSX === 'undefined') {
            alert('Excel library not loaded. Please refresh the page and try again.');
            return;
        }
        
        let responses = this.currentResponses || [];
        
        // If no current responses, try to load from localStorage
        if (responses.length === 0) {
            responses = JSON.parse(localStorage.getItem('employer-submissions') || '[]');
        }
        
        if (responses.length === 0) {
            alert('No responses to export. Please ensure there are survey responses available.');
            return;
        }
        
        try {
            console.log('Starting export with', responses.length, 'responses');
            
            // Show simple loading message
            alert('Preparing Excel export...');
            
            // Create comprehensive Excel data
            const excelData = this.prepareExcelData(responses);
            
            // Export with multiple sheets
            await this.exportToExcelAdvanced(excelData);
            
            alert(`Successfully exported ${responses.length} responses to Excel`);
            console.log('Export completed successfully');
            
        } catch (error) {
            console.error('Export error:', error);
            alert('Failed to export responses: ' + error.message);
        }
    }
    
    prepareExcelData(responses) {
        // Create multiple sheets for comprehensive entrepreneur survey data export
        const entrepreneursSheet = [];
        const challengesSheet = [];
        
        // Process each response
        responses.forEach((response, responseIndex) => {
            // Add entrepreneur info to main sheet
            entrepreneursSheet.push({
                'Response ID': responseIndex + 1,
                'Entrepreneur Name': response.entrepreneurName || 'Not provided',
                'Company Name': response.companyName || 'Not provided',
                'Business Growth Limited': response.businessGrowthLimited || 'Not specified',
                'Decision Making Approach': response.decisionMaking || 'Not specified',
                'Top Challenges': this.formatArrayField(response.topChallenges || []),
                'Challenge Details': response.challengeDetails || 'Not provided',
                'Expert Support Areas': response.expertSupportAreas || 'Not provided',
                'Desired Outcomes': response.desiredOutcomes || 'Not provided',
                'Ready to Participate': response.readyToParticipate || 'Not specified',
                'Submitted Date': this.formatDate(response.submittedAt || response.timestamp || response.createdAt, 'Not recorded'),
                'Completion Time': response.completionTime ? Math.round(response.completionTime / 60000) + ' minutes' : 'Not tracked'
            });
            
            // Add detailed challenge analysis
            const challenges = Array.isArray(response.topChallenges) ? response.topChallenges : [];
            challenges.forEach((challenge, challengeIndex) => {
                challengesSheet.push({
                    'Response ID': responseIndex + 1,
                    'Entrepreneur Name': response.entrepreneurName || 'Not provided',
                    'Company Name': response.companyName || 'Not provided',
                    'Challenge Number': challengeIndex + 1,
                    'Challenge Type': challenge || 'Not specified',
                    'Business Growth Limited': response.businessGrowthLimited || 'Not specified',
                    'Decision Making Approach': response.decisionMaking || 'Not specified',
                    'Ready to Participate': response.readyToParticipate || 'Not specified'
                });
            });
        });
        
        // Create analytics sheet for entrepreneur data
        const analyticsSheet = [
            { 'Metric': 'Total Entrepreneurs Assessed', 'Value': responses.length },
            { 'Metric': 'Total Challenges Identified', 'Value': this.calculateTotalChallenges(responses) },
            { 'Metric': 'Ready & Committed Count', 'Value': this.getReadyCommitted(responses) },
            { 'Metric': 'Top Challenge Area', 'Value': this.getTopChallenge(responses) },
            { 'Metric': 'Growth Limited (Often)', 'Value': this.getGrowthLimitedCount(responses) },
            { 'Metric': 'Today\'s Submissions', 'Value': this.getTodayResponseCount(responses) },
            { 'Metric': 'Export Date', 'Value': this.formatDate(new Date(), 'Now') }
        ];
        
        // Create breakdown sheets for entrepreneur data
        const challengesBreakdown = this.getChallengesBreakdown(responses).map(item => ({
            'Challenge Type': item.name,
            'Count': item.count,
            'Percentage': ((item.count / this.calculateTotalChallenges(responses)) * 100).toFixed(1) + '%'
        }));
        
        const decisionMakingBreakdown = this.getDecisionMakingBreakdown(responses).map(item => ({
            'Decision Making Approach': item.name,
            'Count': item.count,
            'Percentage': ((item.count / responses.length) * 100).toFixed(1) + '%'
        }));
        
        const commitmentBreakdown = this.getCommitmentBreakdown(responses).map(item => ({
            'Commitment Level': item.name,
            'Count': item.count,
            'Percentage': ((item.count / responses.length) * 100).toFixed(1) + '%'
        }));
        
        return {
            'Entrepreneur Assessments': entrepreneursSheet,
            'Business Challenges': challengesSheet,
            'Analytics Summary': analyticsSheet,
            'Challenges Breakdown': challengesBreakdown,
            'Decision Making Breakdown': decisionMakingBreakdown,
            'Commitment Breakdown': commitmentBreakdown
        };
    }
    
    formatArrayField(arrayField) {
        if (Array.isArray(arrayField) && arrayField.length > 0) {
            return arrayField.join(', ');
        }
        return arrayField || 'Not specified';
    }
    
    // Safe date formatting function to prevent "Invalid Date" errors
    formatDate(dateValue, defaultText = 'Not specified') {
        if (!dateValue) return defaultText;
        
        try {
            const date = new Date(dateValue);
            if (isNaN(date.getTime())) {
                // If it's a string that looks like a date, try parsing it
                if (typeof dateValue === 'string' && dateValue.match(/^\d{4}-\d{2}-\d{2}$/)) {
                    return dateValue; // Return as-is if it's already in YYYY-MM-DD format
                }
                return defaultText;
            }
            return date.toLocaleDateString();
        } catch (error) {
            console.warn('Date formatting error:', error, 'for value:', dateValue);
            return defaultText;
        }
    }
    
    // Safe relative time formatting
    getRelativeTime(timestamp, defaultText = 'Recently') {
        if (!timestamp) return defaultText;
        
        try {
            const date = new Date(timestamp);
            if (isNaN(date.getTime())) return defaultText;
            
            const now = new Date();
            const diffMs = now - date;
            const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
            const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
            
            if (diffHours < 1) return 'Just now';
            if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
            if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
            return date.toLocaleDateString();
        } catch (error) {
            console.warn('Relative time formatting error:', error, 'for timestamp:', timestamp);
            return defaultText;
        }
    }

    // Helper function to safely extract position data from response
    getPositionData(response) {
        // If response has positions array, use the first position
        if (response.positions && Array.isArray(response.positions) && response.positions.length > 0) {
            return response.positions[0];
        }
        // Otherwise, return the response itself (for backward compatibility)
        return response;
    }

    // Helper function to get all positions from response
    getAllPositions(response) {
        if (response.positions && Array.isArray(response.positions) && response.positions.length > 0) {
            return response.positions;
        }
        // Return single position as array for consistency
        return [response];
    }

    // Helper function to get summary of all positions for display
    getPositionSummary(response) {
        const positions = this.getAllPositions(response);
        if (positions.length === 1) {
            return this.getFieldValue(response, 'jobTitle');
        }
        return `${positions.length} positions: ${positions.map(pos => pos.jobTitle || 'Untitled').join(', ')}`;
    }

    // Helper function to get field value from response with position fallback
    getFieldValue(response, fieldName, defaultValue = 'Not specified') {
        const positionData = this.getPositionData(response);
        return positionData[fieldName] || response[fieldName] || defaultValue;
    }

    // Generate comprehensive entrepreneur assessment details HTML
    generateEntrepreneurDetailsHtml(response) {
        return `
            <h3><i class="fas fa-chart-line"></i> Current Business Challenges</h3>
            <div class="detail-grid">
                <div class="detail-item">
                    <label>Business Growth Limited:</label>
                    <span>${this.formatBusinessGrowthLimited(response.businessGrowthLimited)}</span>
                </div>
                <div class="detail-item">
                    <label>Decision Making Approach:</label>
                    <span>${this.formatDecisionMaking(response.decisionMaking)}</span>
                </div>
                <div class="detail-item full-width">
                    <label>Top Business Challenges:</label>
                    <span>${this.formatTopChallenges(response.topChallenges, response.topChallengesOther)}</span>
                </div>
                <div class="detail-item full-width">
                    <label>Challenge Details:</label>
                    <span>${response.challengeDetails || 'Not provided'}</span>
                </div>
            </div>
            
            <h3 style="margin-top: 2rem;"><i class="fas fa-hands-helping"></i> Expert Support Needs</h3>
            <div class="detail-grid">
                <div class="detail-item full-width">
                    <label>Expert Support Areas:</label>
                    <span>${response.expertSupportAreas || 'Not provided'}</span>
                </div>
                <div class="detail-item full-width">
                    <label>Desired Outcomes (6-12 months):</label>
                    <span>${response.desiredOutcomes || 'Not provided'}</span>
                </div>
            </div>
            
            <h3 style="margin-top: 2rem;"><i class="fas fa-handshake"></i> Commitment & Follow-up</h3>
            <div class="detail-grid">
                <div class="detail-item">
                    <label>Ready to Participate:</label>
                    <span>${this.formatReadinessLevel(response.readyToParticipate)}</span>
                </div>
                <div class="detail-item">
                    <label>Assessment Completion:</label>
                    <span>${response.completionTime ? Math.round(response.completionTime / 60000) + ' minutes' : 'Not tracked'}</span>
                </div>
            </div>
        `;
    }
    
    // Helper methods to format survey responses
    formatBusinessGrowthLimited(value) {
        const options = {
            'yes-often': 'Yes, often',
            'sometimes': 'Sometimes', 
            'no-fully-equipped': 'No, I feel fully equipped'
        };
        return options[value] || value || 'Not specified';
    }
    
    formatDecisionMaking(value) {
        const options = {
            'trial-error': 'I rely on trial and error',
            'ask-friends-peers': 'I ask friends/peers',
            'search-online-trainings': 'I search online or attend trainings',
            'consult-experts-mentors': 'I consult experts/mentors'
        };
        return options[value] || value || 'Not specified';
    }
    
    formatTopChallenges(challenges, other) {
        if (!challenges) return 'Not specified';
        
        const challengeLabels = {
            'increasing-sales': 'Increasing sales',
            'improving-production': 'Improving production processes',
            'modernizing-business': 'Modernizing my business',
            'becoming-sustainable': 'Becoming more sustainable',
            'optimizing-team': 'Optimizing team structure/performance',
            'improving-quality': 'Improving product or service quality'
        };
        
        let formattedChallenges = [];
        if (Array.isArray(challenges)) {
            formattedChallenges = challenges.map(c => challengeLabels[c] || c);
        } else if (typeof challenges === 'string') {
            formattedChallenges = [challengeLabels[challenges] || challenges];
        }
        
        if (other && other.trim()) {
            formattedChallenges.push(`Other: ${other}`);
        }
        
        return formattedChallenges.length > 0 ? formattedChallenges.join(', ') : 'Not specified';
    }
    
    formatReadinessLevel(value) {
        const options = {
            'yes-ready-committed': 'Yes, I am ready and committed',
            'maybe-understand-more': 'Maybe, I would like to understand more',
            'no-not-at-moment': 'No, not at the moment'
        };
        return options[value] || value || 'Not specified';
    }

    // Generate comprehensive position details HTML for multi-position display
    generatePositionDetailsHtml(response) {
        const positions = this.getAllPositions(response);
        const hasMultiplePositions = positions.length > 1;
        
        if (hasMultiplePositions) {
            return `
                <h3><i class="fas fa-briefcase"></i> Position Details</h3>
                <div class="detail-grid" style="margin-bottom: 1.5rem;">
                    <div class="detail-item">
                        <label>Total Positions:</label>
                        <span>${positions.length} job openings</span>
                    </div>
                    <div class="detail-item">
                        <label>Available Positions:</label>
                        <span>${response.positionsAvailable || 'Not specified'}</span>
                    </div>
                </div>
                <div class="positions-section">
                    ${positions.map((position, index) => `
                        <div class="position-card">
                            <div class="position-header">
                                <h4>Position ${index + 1}: ${position.jobTitle || 'Untitled Position'}</h4>
                            </div>
                            <div class="position-details">
                                <div class="detail-row">
                                    <div class="detail-item">
                                        <label>Work Type:</label>
                                        <span>${position.workType || 'Not specified'}</span>
                                    </div>
                                    <div class="detail-item">
                                        <label>Work Mode:</label>
                                        <span>${position.workMode || 'Not specified'}</span>
                                    </div>
                                </div>
                                <div class="detail-row">
                                    <div class="detail-item">
                                        <label>Expected Start Date:</label>
                                        <span>${position.startDate || 'Not specified'}</span>
                                    </div>
                                    <div class="detail-item">
                                        <label>Contract Type:</label>
                                        <span>${position.contractType || 'Not specified'}</span>
                                    </div>
                                </div>
                                <div class="detail-item full-width">
                                    <label>Job Summary:</label>
                                    <span>${position.jobSummary || 'Not provided'}</span>
                                </div>
                                <div class="detail-item full-width">
                                    <label>Key Responsibilities:</label>
                                    <span>${position.keyResponsibilities || 'Not provided'}</span>
                                </div>
                                <div class="detail-row">
                                    <div class="detail-item">
                                        <label>Experience Level:</label>
                                        <span>${position.experienceLevel || 'Not specified'}</span>
                                    </div>
                                    <div class="detail-item">
                                        <label>Education Level:</label>
                                        <span>${position.educationLevel || 'Not specified'}</span>
                                    </div>
                                </div>
                                <div class="detail-item">
                                    <label>Technical Skills:</label>
                                    <span>${position.technicalSkills || 'Not specified'}</span>
                                </div>
                                <div class="detail-item">
                                    <label>Behavioral Skills:</label>
                                    <span>${this.formatArrayField(position.behavioralSkills || [])}</span>
                                </div>
                                <div class="detail-item">
                                    <label>Other Behavioral Skills:</label>
                                    <span>${position.otherBehavioralSkills || 'Not specified'}</span>
                                </div>
                                <div class="detail-row">
                                    <div class="detail-item">
                                        <label>Work Environment:</label>
                                        <span>${position.workEnvironment || 'Not specified'}</span>
                                    </div>
                                    <div class="detail-item">
                                        <label>Preferred Age Range:</label>
                                        <span>${position.idealAge || 'Not specified'}</span>
                                    </div>
                                </div>
                                <div class="detail-row">
                                    <div class="detail-item">
                                        <label>Gender Preference:</label>
                                        <span>${position.idealGender || 'Not specified'}</span>
                                    </div>
                                    <div class="detail-item">
                                        <label>Preferred Location:</label>
                                        <span>${position.idealLocation || 'Not specified'}</span>
                                    </div>
                                </div>
                                <div class="detail-item">
                                    <label>Salary Range:</label>
                                    <span>${position.salaryRange || 'Not specified'}</span>
                                </div>
                                <div class="detail-item">
                                    <label>Benefits:</label>
                                    <span>${this.formatArrayField(position.benefits || [])}</span>
                                </div>
                                <div class="detail-item">
                                    <label>Other Benefits:</label>
                                    <span>${position.otherBenefits || 'Not specified'}</span>
                                </div>
                                <div class="detail-item">
                                    <label>Working Hours:</label>
                                    <span>${position.workingHours || 'Not specified'}</span>
                                </div>
                                <div class="detail-item full-width">
                                    <label>Additional Notes:</label>
                                    <span>${position.additionalNotes || 'Not specified'}</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else {
            // Single position display - clean format without position numbering
            const position = positions[0];
            return `
                <h3><i class="fas fa-briefcase"></i> Position Details</h3>
                <div class="detail-grid" style="margin-bottom: 1.5rem;">
                    <div class="detail-item">
                        <label>Available Positions:</label>
                        <span>${response.positionsAvailable || '1'}</span>
                    </div>
                </div>
                <div class="single-position-section">
                    <div class="position-details-grid">
                        <div class="detail-row">
                            <div class="detail-item">
                                <label>Job Title:</label>
                                <span>${position.jobTitle || 'Not specified'}</span>
                            </div>
                            <div class="detail-item">
                                <label>Positions Available:</label>
                                <span>${response.positionsAvailable || 'Not specified'}</span>
                            </div>
                        </div>
                        <div class="detail-row">
                            <div class="detail-item">
                                <label>Work Type:</label>
                                <span>${position.workType || 'Not specified'}</span>
                            </div>
                            <div class="detail-item">
                                <label>Work Mode:</label>
                                <span>${position.workMode || 'Not specified'}</span>
                            </div>
                        </div>
                        <div class="detail-row">
                            <div class="detail-item">
                                <label>Expected Start Date:</label>
                                <span>${position.startDate || 'Not specified'}</span>
                            </div>
                            <div class="detail-item">
                                <label>Contract Type:</label>
                                <span>${position.contractType || 'Not specified'}</span>
                            </div>
                        </div>
                        <div class="detail-item full-width">
                            <label>Job Summary:</label>
                            <span>${position.jobSummary || 'Not provided'}</span>
                        </div>
                        <div class="detail-item full-width">
                            <label>Key Responsibilities:</label>
                            <span>${position.keyResponsibilities || 'Not provided'}</span>
                        </div>
                        <div class="detail-row">
                            <div class="detail-item">
                                <label>Experience Level:</label>
                                <span>${position.experienceLevel || 'Not specified'}</span>
                            </div>
                            <div class="detail-item">
                                <label>Education Level:</label>
                                <span>${position.educationLevel || 'Not specified'}</span>
                            </div>
                        </div>
                        <div class="detail-item">
                            <label>Technical Skills:</label>
                            <span>${position.technicalSkills || 'Not specified'}</span>
                        </div>
                        <div class="detail-item">
                            <label>Behavioral Skills:</label>
                            <span>${this.formatArrayField(position.behavioralSkills || [])}</span>
                        </div>
                        <div class="detail-item">
                            <label>Other Behavioral Skills:</label>
                            <span>${position.otherBehavioralSkills || 'Not specified'}</span>
                        </div>
                        <div class="detail-row">
                            <div class="detail-item">
                                <label>Work Environment:</label>
                                <span>${position.workEnvironment || 'Not specified'}</span>
                            </div>
                            <div class="detail-item">
                                <label>Preferred Age Range:</label>
                                <span>${position.idealAge || 'Not specified'}</span>
                            </div>
                        </div>
                        <div class="detail-row">
                            <div class="detail-item">
                                <label>Gender Preference:</label>
                                <span>${position.idealGender || 'Not specified'}</span>
                            </div>
                            <div class="detail-item">
                                <label>Preferred Location:</label>
                                <span>${position.idealLocation || 'Not specified'}</span>
                            </div>
                        </div>
                        <div class="detail-item">
                            <label>Salary Range:</label>
                            <span>${position.salaryRange || 'Not specified'}</span>
                        </div>
                        <div class="detail-item">
                            <label>Benefits:</label>
                            <span>${this.formatArrayField(position.benefits || [])}</span>
                        </div>
                        <div class="detail-item">
                            <label>Other Benefits:</label>
                            <span>${position.otherBenefits || 'Not specified'}</span>
                        </div>
                        <div class="detail-item">
                            <label>Working Hours:</label>
                            <span>${position.workingHours || 'Not specified'}</span>
                        </div>
                        <div class="detail-item full-width">
                            <label>Additional Notes:</label>
                            <span>${position.additionalNotes || 'Not specified'}</span>
                        </div>
                    </div>
                </div>
            `;
        }
    }
    
    async exportToExcelAdvanced(data) {
        // Create workbook
        const wb = XLSX.utils.book_new();
        
        // Add sheets
        Object.entries(data).forEach(([sheetName, sheetData]) => {
            const ws = XLSX.utils.json_to_sheet(sheetData);
            
            // Auto-size columns
            const range = XLSX.utils.decode_range(ws['!ref']);
            const cols = [];
            for (let C = range.s.c; C <= range.e.c; ++C) {
                let max_width = 0;
                for (let R = range.s.r; R <= range.e.r; ++R) {
                    const cell = ws[XLSX.utils.encode_cell({r: R, c: C})];
                    if (cell && cell.v) {
                        const width = cell.v.toString().length;
                        if (width > max_width) max_width = width;
                    }
                }
                cols.push({wch: Math.min(max_width + 2, 50)});
            }
            ws['!cols'] = cols;
            
            XLSX.utils.book_append_sheet(wb, ws, sheetName);
        });
        
        // Generate filename with timestamp
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
        const filename = `Expert-Support-Matching-Export-${timestamp}.xlsx`;
        
        // Save file
        XLSX.writeFile(wb, filename);
    }



    viewSingleResponse(index) {
        const responses = this.currentResponses || [];
        const response = responses[responses.length - 1 - index]; // Adjust for reverse order
        
        if (!response) {
            Utils.showError('Response not found');
            return;
        }
        
        const popup = document.createElement('div');
        popup.className = 'notification-overlay';
        popup.innerHTML = `
            <div class="notification-popup response-detail-popup">
                <div class="notification-header">
                    <h2>Entrepreneur Assessment - ${response.entrepreneurName || response.companyName || 'Unknown Entrepreneur'}</h2>
                    <button onclick="this.closest('.notification-overlay').remove()" class="close-btn">×</button>
                </div>
                <div class="response-detail-content">
                    <!-- Personal & Business Information Section -->
                    <div class="entrepreneur-info-section">
                        <h3><i class="fas fa-user-circle"></i> Personal & Business Information</h3>
                        <div class="detail-grid">
                            <div class="detail-item">
                                <label>Entrepreneur Name:</label>
                                <span>${response.entrepreneurName || 'Not provided'}</span>
                            </div>
                            <div class="detail-item">
                                <label>Company Name:</label>
                                <span>${response.companyName || 'Not provided'}</span>
                            </div>
                            <div class="detail-item">
                                <label>Assessment Date:</label>
                                <span>${Utils.formatDate(response.createdAt || response.timestamp, 'datetime')}</span>
                            </div>
                            <div class="detail-item">
                                <label>Device Used:</label>
                                <span>${response.deviceInfo?.device || 'Not specified'}</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Business Challenges Section -->
                    <div class="challenges-info-section">
                        ${this.generateEntrepreneurDetailsHtml(response)}
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(popup);
        setTimeout(() => popup.classList.add('show'), 100);
    }
    
    viewResponses() {
        const responses = this.currentResponses || [];
        
        if (responses.length === 0) {
            Utils.showWarning('No responses to view');
            return;
        }
        
        const popup = document.createElement('div');
        popup.className = 'notification-overlay';
        popup.innerHTML = `
            <div class="notification-popup responses-list-popup">
                <div class="notification-header">
                    <h2>All Survey Responses (${responses.length})</h2>
                    <button onclick="this.closest('.notification-overlay').remove()" class="close-btn">×</button>
                </div>
                <div class="responses-list-content">
                    <div class="responses-table">
                        <div class="table-header">
                            <div class="table-cell">Company</div>
                            <div class="table-cell">Industry</div>
                            <div class="table-cell">Job Title</div>
                            <div class="table-cell">Submitted</div>
                            <div class="table-cell">Actions</div>
                        </div>
                        ${responses.map((response, index) => `
                            <div class="table-row">
                                <div class="table-cell">${response.companyName || 'Unknown'}</div>
                                <div class="table-cell">${response.industry || 'Not specified'}</div>
                                <div class="table-cell">${response.jobTitle || 'Not specified'}</div>
                                <div class="table-cell">${this.formatDate(response.timestamp || response.submittedAt)}</div>
                                <div class="table-cell">
                                    <button class="table-action-btn" onclick="window.simpleFormSubmit.viewSingleResponse(${responses.length - 1 - index})">
                                        <i class="fas fa-eye"></i>
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(popup);
        setTimeout(() => popup.classList.add('show'), 100);
    }
    
    refreshData() {
        console.log('Refreshing data...');
        this.loadAdminData();
        this.loadFirebaseData();
        Utils.showSuccess('Data refreshed');
    }

    clearLocalStorage() {
        if (confirm('Are you sure you want to clear all local storage data? This cannot be undone.')) {
            localStorage.removeItem('entrepreneur-submissions');
            localStorage.removeItem('latest-submission');
            this.loadAdminData();
            Utils.showSuccess('Local storage cleared');
        }
    }

    async loadFirebaseData() {
        console.log('Loading Firebase data specifically...');
        try {
            if (!window.firebaseConfig || !window.firebaseConfig.getCollection) {
                console.log('Firebase not initialized');
                return;
            }
            
            const result = await window.firebaseConfig.getCollection('entrepreneur-surveys');
            console.log('Firebase collection result:', result);
            
            if (result && result.success && result.data && result.data.length > 0) {
                const responses = result.data;
                console.log('Firebase data loaded successfully:', responses.length, 'responses');
                
                // Update current responses
                this.currentResponses = responses;
                
                // Update all dashboard components
                this.updateAnalytics(responses);
                this.displayRecentResponses(responses);
                this.updateInsightfulMetrics(responses);
                
                Utils.showSuccess('Firebase data loaded');
            } else {
                console.log('No Firebase data found');
            }
        } catch (error) {
            console.error('Firebase data error:', error);
        }
    }

    logoutAdmin() {
        // Clear persistent admin session
        this.clearAdminSession();
        
        // Switch back to survey view
        this.showView('surveyView');
        
        console.log('Admin logged out - persistent session cleared');
        this.showToast('admin_logout_success', 'success');
    }

    setupFormNavigation() {
        // Handle Next/Previous buttons for multi-step form
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');
        const positionsInput = document.getElementById('positionsAvailable');
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextSection());
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prevSection());
        }
        
        // Setup dynamic positions functionality
        if (positionsInput) {
            positionsInput.addEventListener('input', (e) => {
                this.handlePositionsChange(e.target.value);
            });
        }
        
        // Initialize form state
        this.currentSection = 'A1';
        this.sectionOrder = ['A1', 'A2', 'A3', 'A4', 'B'];
        this.totalSections = 5;
        this.updateProgress();
        this.updateNavigation();
        this.setupConditionalLogic();
        this.setupFieldValidation();
        this.setupAutoSave();
        
        // Initialize positions system
        this.initializePositionsSystem();
    }
    
    initializePositionsSystem() {
        this.positions = []; // Array to store position data
        this.currentPositionMode = 'single'; // 'single' or 'multiple'
    }
    
    handlePositionsChange(value) {
        const numPositions = parseInt(value) || 1;
        
        if (numPositions === 1) {
            this.showSinglePositionMode();
        } else if (numPositions > 1) {
            this.showMultiplePositionsMode(numPositions);
        }
    }
    
    showSinglePositionMode() {
        // Section 2 - Position Details
        const singleMode = document.getElementById('singlePositionMode');
        const multipleMode = document.getElementById('multiplePositionsMode');
        
        // Section 3 - Candidate Profile
        const singlePositionCandidate = document.getElementById('singlePositionCandidate');
        const multiplePositionsCandidate = document.getElementById('multiplePositionsCandidate');
        
        // Section 4 - What You Offer
        const singlePositionOffer = document.getElementById('singlePositionOffer');
        const multiplePositionsOffer = document.getElementById('multiplePositionsOffer');
        
        // Show single position mode
        if (singleMode) singleMode.style.display = 'block';
        if (multipleMode) multipleMode.style.display = 'none';
        
        if (singlePositionCandidate) singlePositionCandidate.style.display = 'block';
        if (multiplePositionsCandidate) multiplePositionsCandidate.style.display = 'none';
        
        if (singlePositionOffer) singlePositionOffer.style.display = 'block';
        if (multiplePositionsOffer) multiplePositionsOffer.style.display = 'none';
        
        this.currentPositionMode = 'single';
    }
    
    showMultiplePositionsMode(numPositions) {
        // Section 2 - Position Details
        const singleMode = document.getElementById('singlePositionMode');
        const multipleMode = document.getElementById('multiplePositionsMode');
        const positionCountSpan = document.getElementById('positionCount');
        
        // Section 3 - Candidate Profile
        const singlePositionCandidate = document.getElementById('singlePositionCandidate');
        const multiplePositionsCandidate = document.getElementById('multiplePositionsCandidate');
        
        // Section 4 - What You Offer
        const singlePositionOffer = document.getElementById('singlePositionOffer');
        const multiplePositionsOffer = document.getElementById('multiplePositionsOffer');
        
        // Show multiple positions mode
        if (singleMode) singleMode.style.display = 'none';
        if (multipleMode) multipleMode.style.display = 'block';
        if (positionCountSpan) positionCountSpan.textContent = numPositions;
        
        if (singlePositionCandidate) singlePositionCandidate.style.display = 'none';
        if (multiplePositionsCandidate) multiplePositionsCandidate.style.display = 'block';
        
        if (singlePositionOffer) singlePositionOffer.style.display = 'none';
        if (multiplePositionsOffer) multiplePositionsOffer.style.display = 'block';
        
        this.currentPositionMode = 'multiple';
        this.createPositionCards(numPositions);
    }
    
    createPositionCards(numPositions) {
        const grid = document.getElementById('positionsGrid');
        if (!grid) return;
        
        // Clear existing cards
        grid.innerHTML = '';
        
        // Initialize positions array
        this.positions = Array.from({ length: numPositions }, (_, i) => ({
            id: i + 1,
            jobTitle: '',
            workType: '',
            workMode: '',
            startDate: '',
            contractType: '',
            jobSummary: '',
            keyResponsibilities: '',
            experienceLevel: '',
            educationLevel: '',
            technicalSkills: '',
            behavioralSkills: [],
            otherBehavioralSkills: '',
            workEnvironment: '',
            idealAge: '',
            idealGender: '',
            idealLocation: '',
            salaryRange: '',
            benefits: [],
            otherBenefits: '',
            workingHours: '',
            additionalNotes: ''
        }));
        
        // Create cards for each position
        for (let i = 0; i < numPositions; i++) {
            const card = this.createPositionCard(i + 1);
            grid.appendChild(card);
        }
        
        // Apply translations to newly created cards
        this.updateTranslations();
        
        // Add click outside listener for dropdowns
        this.addDropdownClickOutsideListener();
    }
    
    createPositionCard(positionNumber) {
        const card = document.createElement('div');
        card.className = 'position-card';
        card.id = `position-card-${positionNumber}`;
        
        card.innerHTML = `
            <div class="position-card-header">
                <div class="position-card-title">
                    <i class="fas fa-briefcase"></i>
                    Position ${positionNumber}
                </div>
                <div class="paste-to-dropdown">
                    <button type="button" class="paste-to-btn" onclick="window.simpleFormSubmit.togglePasteDropdown(${positionNumber})">
                        <i class="fas fa-clipboard"></i>
                        Paste to:
                        <i class="fas fa-chevron-down dropdown-arrow"></i>
                    </button>
                    <div class="paste-dropdown-menu" id="pasteDropdown${positionNumber}">
                        <!-- Dropdown options will be populated dynamically -->
                    </div>
                </div>
            </div>
            
            <div class="position-form-group">
                <label for="pos${positionNumber}_jobTitle" data-translate="job_title">Job Title</label>
                <span class="required"> *</span>
                <input type="text" id="pos${positionNumber}_jobTitle" name="pos${positionNumber}_jobTitle" required>
            </div>
            
            <div class="position-form-group">
                <label data-translate="work_type">Work Type</label>
                <span class="required"> *</span>
                <div class="position-checkbox-group">
                    <label class="position-checkbox-label">
                        <input type="radio" name="pos${positionNumber}_workType" value="full-time" required>
                        <span data-translate="full_time">Full-time</span>
                    </label>
                    <label class="position-checkbox-label">
                        <input type="radio" name="pos${positionNumber}_workType" value="part-time" required>
                        <span data-translate="part_time">Part-time</span>
                    </label>
                    <label class="position-checkbox-label">
                        <input type="radio" name="pos${positionNumber}_workType" value="internship" required>
                        <span data-translate="internship">Internship</span>
                    </label>
                </div>
            </div>
            
            <div class="position-form-group">
                <label data-translate="work_mode">Work Mode</label>
                <span class="required"> *</span>
                <div class="position-checkbox-group">
                    <label class="position-checkbox-label">
                        <input type="radio" name="pos${positionNumber}_workMode" value="onsite" required>
                        <span data-translate="onsite">Onsite</span>
                    </label>
                    <label class="position-checkbox-label">
                        <input type="radio" name="pos${positionNumber}_workMode" value="remote" required>
                        <span data-translate="remote">Remote</span>
                    </label>
                    <label class="position-checkbox-label">
                        <input type="radio" name="pos${positionNumber}_workMode" value="hybrid" required>
                        <span data-translate="hybrid">Hybrid</span>
                    </label>
                </div>
            </div>
            
            <div class="position-form-group">
                <label for="pos${positionNumber}_startDate" data-translate="expected_start_date">Expected Start Date</label>
                <span class="required"> *</span>
                <input type="date" id="pos${positionNumber}_startDate" name="pos${positionNumber}_startDate" required>
            </div>
            
            <div class="position-form-group">
                <label data-translate="contract_type">Contract Type</label>
                <span class="required"> *</span>
                <div class="position-checkbox-group">
                    <label class="position-checkbox-label">
                        <input type="radio" name="pos${positionNumber}_contractType" value="permanent" required>
                        <span data-translate="permanent">Permanent</span>
                    </label>
                    <label class="position-checkbox-label">
                        <input type="radio" name="pos${positionNumber}_contractType" value="fixed-term" required>
                        <span data-translate="fixed_term">Fixed-Term</span>
                    </label>
                    <label class="position-checkbox-label">
                        <input type="radio" name="pos${positionNumber}_contractType" value="casual" required>
                        <span data-translate="casual">Casual</span>
                    </label>
                </div>
            </div>
            
            <div class="position-form-group">
                <label for="pos${positionNumber}_jobSummary" data-translate="job_summary">Job Summary</label>
                <span class="required"> *</span>
                <textarea id="pos${positionNumber}_jobSummary" name="pos${positionNumber}_jobSummary" rows="3" placeholder="Brief description of the role's purpose (2-3 lines)" required></textarea>
            </div>
            
            <div class="position-form-group">
                <label for="pos${positionNumber}_keyResponsibilities" data-translate="key_responsibilities">Key Responsibilities</label>
                <span class="required"> *</span>
                <textarea id="pos${positionNumber}_keyResponsibilities" name="pos${positionNumber}_keyResponsibilities" rows="4" placeholder="List 4-6 main tasks and responsibilities for this role..." required></textarea>
            </div>
            
            <div class="position-form-group">
                <label data-translate="experience_level">Experience Level Required</label>
                <span class="required"> *</span>
                <div class="position-checkbox-group">
                    <label class="position-checkbox-label">
                        <input type="radio" name="pos${positionNumber}_experienceLevel" value="trainee" required>
                        <span data-translate="trainee">Trainee</span>
                    </label>
                    <label class="position-checkbox-label">
                        <input type="radio" name="pos${positionNumber}_experienceLevel" value="entry-level" required>
                        <span data-translate="entry_level">Entry-Level</span>
                    </label>
                    <label class="position-checkbox-label">
                        <input type="radio" name="pos${positionNumber}_experienceLevel" value="mid-career" required>
                        <span data-translate="mid_career">Mid-Career</span>
                    </label>
                    <label class="position-checkbox-label">
                        <input type="radio" name="pos${positionNumber}_experienceLevel" value="senior-level" required>
                        <span data-translate="senior_level">Senior-Level</span>
                    </label>
                </div>
            </div>
            
            <div class="position-form-group">
                <label for="pos${positionNumber}_educationLevel" data-translate="education_level">Education Level Required</label>
                <input type="text" id="pos${positionNumber}_educationLevel" name="pos${positionNumber}_educationLevel" placeholder="e.g., High School, Certificate, Degree">
            </div>
            
            <div class="position-form-group">
                <label for="pos${positionNumber}_technicalSkills" data-translate="technical_skills">Technical/Professional Skills Needed</label>
                <textarea id="pos${positionNumber}_technicalSkills" name="pos${positionNumber}_technicalSkills" rows="3" placeholder="List required software, certificates, specific skills..."></textarea>
            </div>
            
            <div class="position-form-group">
                <label data-translate="behavioral_skills">Behavioral/Soft Skills Needed (Check all that apply)</label>
                <div class="position-checkbox-group position-behavioral-skills">
                    <label class="position-checkbox-label">
                        <input type="checkbox" name="pos${positionNumber}_behavioralSkills" value="positive-attitude">
                        <span data-translate="positive_attitude">Positive attitude</span>
                    </label>
                    <label class="position-checkbox-label">
                        <input type="checkbox" name="pos${positionNumber}_behavioralSkills" value="team-player">
                        <span data-translate="team_player">Team player</span>
                    </label>
                    <label class="position-checkbox-label">
                        <input type="checkbox" name="pos${positionNumber}_behavioralSkills" value="self-motivated">
                        <span data-translate="self_motivated">Self-motivated</span>
                    </label>
                    <label class="position-checkbox-label">
                        <input type="checkbox" name="pos${positionNumber}_behavioralSkills" value="reliable">
                        <span data-translate="reliable">Reliable</span>
                    </label>
                    <label class="position-checkbox-label">
                        <input type="checkbox" name="pos${positionNumber}_behavioralSkills" value="good-time-manager">
                        <span data-translate="good_time_manager">Good time manager</span>
                    </label>
                    <label class="position-checkbox-label">
                        <input type="checkbox" name="pos${positionNumber}_behavioralSkills" value="adaptable">
                        <span data-translate="adaptable">Adaptable</span>
                    </label>
                    <label class="position-checkbox-label">
                        <input type="checkbox" name="pos${positionNumber}_behavioralSkills" value="takes-initiative">
                        <span data-translate="takes_initiative">Takes initiative</span>
                    </label>
                    <label class="position-checkbox-label">
                        <input type="checkbox" name="pos${positionNumber}_behavioralSkills" value="customer-friendly">
                        <span data-translate="customer_friendly">Customer-friendly</span>
                    </label>
                </div>
            </div>
            
            <div class="position-form-group">
                <label for="pos${positionNumber}_otherBehavioralSkills" data-translate="other_behavioral_skills">Other behavioral skills needed</label>
                <input type="text" id="pos${positionNumber}_otherBehavioralSkills" name="pos${positionNumber}_otherBehavioralSkills" placeholder="Please specify any other qualities">
            </div>
            
            <div class="position-form-group">
                <label for="pos${positionNumber}_workEnvironment" data-translate="work_environment">Work Environment & Social Aspects</label>
                <textarea id="pos${positionNumber}_workEnvironment" name="pos${positionNumber}_workEnvironment" rows="3" placeholder="Who will they work with? (Supervisor, team, customers?) What's the workplace like?"></textarea>
            </div>
            
            <div class="position-form-group">
                <label for="pos${positionNumber}_idealAge" data-translate="preferred_age_range">Preferred Age Range</label>
                <input type="text" id="pos${positionNumber}_idealAge" name="pos${positionNumber}_idealAge" placeholder="e.g., 25-35 years">
            </div>
            
            <div class="position-form-group">
                <label data-translate="gender_preference">Gender Preference</label>
                <div class="position-checkbox-group">
                    <label class="position-checkbox-label">
                        <input type="radio" name="pos${positionNumber}_idealGender" value="no-preference">
                        <span data-translate="no_preference">No preference</span>
                    </label>
                    <label class="position-checkbox-label">
                        <input type="radio" name="pos${positionNumber}_idealGender" value="male">
                        <span data-translate="male">Male</span>
                    </label>
                    <label class="position-checkbox-label">
                        <input type="radio" name="pos${positionNumber}_idealGender" value="female">
                        <span data-translate="female">Female</span>
                    </label>
                </div>
            </div>
            
            <div class="position-form-group">
                <label for="pos${positionNumber}_idealLocation" data-translate="preferred_location">Preferred Location</label>
                <input type="text" id="pos${positionNumber}_idealLocation" name="pos${positionNumber}_idealLocation" placeholder="Preferred candidate location">
            </div>
            
            <div class="position-form-group">
                <label for="pos${positionNumber}_salaryRange" data-translate="salary_range">Salary Range (Monthly)</label>
                <span class="required"> *</span>
                <input type="text" id="pos${positionNumber}_salaryRange" name="pos${positionNumber}_salaryRange" placeholder="e.g., RWF 250,000 - 350,000" required>
            </div>
            
            <div class="position-form-group">
                <label data-translate="benefits_perks">Benefits/Perks (Select all that apply)</label>
                <div class="position-benefits-grid">
                    <label class="position-checkbox-label">
                        <input type="checkbox" name="pos${positionNumber}_benefits" value="transport-allowance">
                        <span data-translate="transport_allowance">Transport allowance</span>
                    </label>
                    <label class="position-checkbox-label">
                        <input type="checkbox" name="pos${positionNumber}_benefits" value="meals-lunch">
                        <span data-translate="meals_lunch">Meals/Lunch</span>
                    </label>
                    <label class="position-checkbox-label">
                        <input type="checkbox" name="pos${positionNumber}_benefits" value="health-insurance">
                        <span data-translate="health_insurance">Health insurance</span>
                    </label>
                    <label class="position-checkbox-label">
                        <input type="checkbox" name="pos${positionNumber}_benefits" value="training-development">
                        <span data-translate="training_development">Training/Development</span>
                    </label>
                    <label class="position-checkbox-label">
                        <input type="checkbox" name="pos${positionNumber}_benefits" value="commission-bonuses">
                        <span data-translate="commission_bonuses">Commission or Bonuses</span>
                    </label>
                    <label class="position-checkbox-label">
                        <input type="checkbox" name="pos${positionNumber}_benefits" value="flexible-schedule">
                        <span data-translate="flexible_schedule">Flexible schedule</span>
                    </label>
                </div>
            </div>
            
            <div class="position-form-group">
                <label for="pos${positionNumber}_otherBenefits" data-translate="other_benefits">Other benefits/perks</label>
                <input type="text" id="pos${positionNumber}_otherBenefits" name="pos${positionNumber}_otherBenefits" placeholder="Please specify any other benefits">
            </div>
            
            <div class="position-form-group">
                <label for="pos${positionNumber}_workingHours" data-translate="working_hours">Working Hours</label>
                <span class="required"> *</span>
                <input type="text" id="pos${positionNumber}_workingHours" name="pos${positionNumber}_workingHours" placeholder="e.g., 9am–5pm, Shift work" required>
            </div>
            
            <div class="position-form-group">
                <label for="pos${positionNumber}_additionalNotes" data-translate="additional_notes">Additional Notes (Optional)</label>
                <textarea id="pos${positionNumber}_additionalNotes" name="pos${positionNumber}_additionalNotes" rows="3" placeholder="Any extra info you'd like to share about this position?"></textarea>
            </div>
        `;
        
        return card;
    }
    
    togglePasteDropdown(sourcePosition) {
        console.log('togglePasteDropdown called with sourcePosition:', sourcePosition);
        const dropdown = document.getElementById(`pasteDropdown${sourcePosition}`);
        console.log('dropdown element found:', dropdown);
        
        if (!dropdown) {
            console.error('Dropdown not found for position:', sourcePosition);
            return;
        }
        
        const allDropdowns = document.querySelectorAll('.paste-dropdown-menu');
        
        // Close all other dropdowns
        allDropdowns.forEach(d => {
            if (d.id !== `pasteDropdown${sourcePosition}`) {
                d.classList.remove('show');
            }
        });
        
        // Toggle current dropdown
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
            console.log('Dropdown closed');
        } else {
            this.populateDropdownOptions(sourcePosition);
            dropdown.classList.add('show');
            console.log('Dropdown opened');
        }
    }
    
    populateDropdownOptions(sourcePosition) {
        const dropdown = document.getElementById(`pasteDropdown${sourcePosition}`);
        const totalPositions = this.positions?.length || 0;
        
        console.log('populateDropdownOptions - sourcePosition:', sourcePosition, 'totalPositions:', totalPositions);
        
        let optionsHtml = '';
        for (let i = 1; i <= totalPositions; i++) {
            if (i !== sourcePosition) {
                const jobTitle = document.getElementById(`pos${i}_jobTitle`)?.value || '';
                const displayText = jobTitle ? `Position ${i}: ${jobTitle}` : `Position ${i}`;
                
                optionsHtml += `
                    <div class="paste-dropdown-option" onclick="window.simpleFormSubmit.pasteToPosition(${sourcePosition}, ${i})">
                        <i class="fas fa-arrow-right"></i>
                        ${displayText}
                    </div>
                `;
            }
        }
        
        if (optionsHtml === '') {
            optionsHtml = '<div class="paste-dropdown-empty">No other positions available</div>';
        }
        
        console.log('Generated options HTML:', optionsHtml);
        dropdown.innerHTML = optionsHtml;
    }
    
    pasteToPosition(sourcePosition, targetPosition) {
        const sourceData = this.getPositionData(sourcePosition);
        if (!sourceData) return;
        
        // Copy data to target position
        this.setPositionData(targetPosition, sourceData);
        
        // Close dropdown
        document.getElementById(`pasteDropdown${sourcePosition}`).classList.remove('show');
        
        // Show success message
        const targetCard = document.getElementById(`position-card-${targetPosition}`);
        if (targetCard) {
            const title = targetCard.querySelector('.position-card-title');
            const originalText = title.innerHTML;
            title.innerHTML = `<i class="fas fa-check"></i> Pasted from Position ${sourcePosition}`;
            title.style.color = '#10b981';
            
            setTimeout(() => {
                title.innerHTML = originalText;
                title.style.color = '';
            }, 3000);
        }
        
        // Also show feedback on source card
        const sourceCard = document.getElementById(`position-card-${sourcePosition}`);
        if (sourceCard) {
            const btn = sourceCard.querySelector('.paste-to-btn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Pasted!';
            btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
            btn.style.color = 'white';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.style.color = '';
            }, 2000);
        }
    }
    
    addDropdownClickOutsideListener() {
        // Remove existing listener if any
        if (this.dropdownClickListener) {
            document.removeEventListener('click', this.dropdownClickListener);
        }
        
        // Add new listener
        this.dropdownClickListener = (event) => {
            const dropdowns = document.querySelectorAll('.paste-dropdown-menu.show');
            const isDropdownClick = event.target.closest('.paste-to-dropdown');
            
            if (!isDropdownClick && dropdowns.length > 0) {
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('show');
                });
            }
        };
        
        document.addEventListener('click', this.dropdownClickListener);
    }
    
    getPositionData(positionNumber) {
        const data = {};
        
        // Get text inputs
        const textFields = ['jobTitle', 'startDate', 'jobSummary', 'keyResponsibilities', 'educationLevel', 'technicalSkills', 'salaryRange', 'otherBenefits', 'workingHours', 'additionalNotes'];
        textFields.forEach(field => {
            const element = document.getElementById(`pos${positionNumber}_${field}`);
            if (element) data[field] = element.value;
        });
        
        // Get radio buttons
        const radioFields = ['workType', 'workMode', 'contractType', 'experienceLevel'];
        radioFields.forEach(field => {
            const checked = document.querySelector(`input[name="pos${positionNumber}_${field}"]:checked`);
            if (checked) data[field] = checked.value;
        });
        
        // Get checkboxes - benefits
        const benefitsChecked = document.querySelectorAll(`input[name="pos${positionNumber}_benefits"]:checked`);
        data.benefits = Array.from(benefitsChecked).map(cb => cb.value);
        
        // Get checkboxes - behavioral skills  
        const behavioralSkillsChecked = document.querySelectorAll(`input[name="pos${positionNumber}_behavioralSkills"]:checked`);
        data.behavioralSkills = Array.from(behavioralSkillsChecked).map(cb => cb.value);
        
        // Get other text fields that were missing
        const otherTextField = document.getElementById(`pos${positionNumber}_otherBehavioralSkills`);
        if (otherTextField) data.otherBehavioralSkills = otherTextField.value;
        
        const workEnvironmentField = document.getElementById(`pos${positionNumber}_workEnvironment`);
        if (workEnvironmentField) data.workEnvironment = workEnvironmentField.value;
        
        const idealAgeField = document.getElementById(`pos${positionNumber}_idealAge`);
        if (idealAgeField) data.idealAge = idealAgeField.value;
        
        const idealGenderField = document.querySelector(`input[name="pos${positionNumber}_idealGender"]:checked`);
        if (idealGenderField) data.idealGender = idealGenderField.value;
        
        const idealLocationField = document.getElementById(`pos${positionNumber}_idealLocation`);
        if (idealLocationField) data.idealLocation = idealLocationField.value;
        
        return data;
    }
    
    setPositionData(positionNumber, data) {
        // Set text inputs
        const textFields = ['jobTitle', 'startDate', 'jobSummary', 'keyResponsibilities', 'educationLevel', 'technicalSkills', 'salaryRange', 'otherBenefits', 'workingHours', 'additionalNotes'];
        textFields.forEach(field => {
            const element = document.getElementById(`pos${positionNumber}_${field}`);
            if (element && data[field]) element.value = data[field];
        });
        
        // Set radio buttons
        const radioFields = ['workType', 'workMode', 'contractType', 'experienceLevel'];
        radioFields.forEach(field => {
            if (data[field]) {
                const radio = document.querySelector(`input[name="pos${positionNumber}_${field}"][value="${data[field]}"]`);
                if (radio) radio.checked = true;
            }
        });
        
        // Set checkboxes - benefits
        if (data.benefits && data.benefits.length > 0) {
            data.benefits.forEach(benefit => {
                const checkbox = document.querySelector(`input[name="pos${positionNumber}_benefits"][value="${benefit}"]`);
                if (checkbox) checkbox.checked = true;
            });
        }
        
        // Set checkboxes - behavioral skills
        if (data.behavioralSkills && data.behavioralSkills.length > 0) {
            data.behavioralSkills.forEach(skill => {
                const checkbox = document.querySelector(`input[name="pos${positionNumber}_behavioralSkills"][value="${skill}"]`);
                if (checkbox) checkbox.checked = true;
            });
        }
        
        // Set other text fields
        if (data.otherBehavioralSkills) {
            const field = document.getElementById(`pos${positionNumber}_otherBehavioralSkills`);
            if (field) field.value = data.otherBehavioralSkills;
        }
        
        if (data.workEnvironment) {
            const field = document.getElementById(`pos${positionNumber}_workEnvironment`);
            if (field) field.value = data.workEnvironment;
        }
        
        if (data.idealAge) {
            const field = document.getElementById(`pos${positionNumber}_idealAge`);
            if (field) field.value = data.idealAge;
        }
        
        if (data.idealGender) {
            const radio = document.querySelector(`input[name="pos${positionNumber}_idealGender"][value="${data.idealGender}"]`);
            if (radio) radio.checked = true;
        }
        
        if (data.idealLocation) {
            const field = document.getElementById(`pos${positionNumber}_idealLocation`);
            if (field) field.value = data.idealLocation;
        }
    }

    showView(viewId) {
        const currentView = document.querySelector('.view.active');
        const targetView = document.getElementById(viewId);
        
        if (!targetView) {
            console.error('View not found:', viewId);
            return;
        }
        
        // Handle admin mode - hide/show navigation
        if (viewId === 'adminView') {
            document.body.classList.add('admin-mode');
        } else {
            document.body.classList.remove('admin-mode');
        }
        
        // If there's a current view, slide it out
        if (currentView) {
            currentView.classList.add('slide-out');
            currentView.classList.remove('active');
            
            // Clean up slide-out class after animation
            setTimeout(() => {
                currentView.classList.remove('slide-out');
            }, 800);
        }
        
        // Show target view with slide-in animation
        setTimeout(() => {
            targetView.classList.add('active');
            console.log('Switched to view:', viewId);
        }, currentView ? 100 : 0);
    }

    nextSection() {
        const currentIndex = this.sectionOrder.indexOf(this.currentSection);
        if (currentIndex < this.sectionOrder.length - 1) {
            this.showSection(this.sectionOrder[currentIndex + 1]);
        }
    }

    prevSection() {
        const currentIndex = this.sectionOrder.indexOf(this.currentSection);
        if (currentIndex > 0) {
            this.showSection(this.sectionOrder[currentIndex - 1]);
        }
    }

    showSection(sectionLetter) {
        // Hide current section
        const sections = document.querySelectorAll('.survey-section');
        sections.forEach(section => section.classList.remove('active'));
        
        // Show target section
        const targetSection = document.getElementById(`section${sectionLetter}`);
        if (targetSection) {
            targetSection.classList.add('active');
            this.currentSection = sectionLetter;
            this.updateProgress();
            this.updateNavigation();
            console.log('Switched to section:', sectionLetter);
        }
    }

    updateProgress() {
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        const progressDots = document.querySelectorAll('.progress-dot');
        
        if (progressFill) {
            const currentIndex = this.sectionOrder.indexOf(this.currentSection);
            const percentage = ((currentIndex + 1) / this.totalSections) * 100;
            progressFill.style.width = percentage + '%';
        }
        
        if (progressText) {
            progressText.textContent = `Step ${this.sectionOrder.indexOf(this.currentSection) + 1} of ${this.totalSections}`;
        }
        
        // Update progress dots
        progressDots.forEach((dot, index) => {
            const stepId = this.sectionOrder[index];
            const currentIndex = this.sectionOrder.indexOf(this.currentSection);
            
            if (index < currentIndex) {
                dot.classList.add('completed');
                dot.classList.remove('active');
            } else if (index === currentIndex) {
                dot.classList.add('active');
                dot.classList.remove('completed');
            } else {
                dot.classList.remove('active', 'completed');
            }
        });
    }

    updateNavigation() {
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');
        const currentIndex = this.sectionOrder.indexOf(this.currentSection);
        
        // Show/hide previous button
        if (prevBtn) {
            prevBtn.style.display = currentIndex > 0 ? 'flex' : 'none';
        }

        // Show/hide next vs submit button
        if (currentIndex === this.sectionOrder.length - 1) {
            if (nextBtn) nextBtn.style.display = 'none';
            if (this.submitBtn) this.submitBtn.style.display = 'flex';
        } else {
            if (nextBtn) nextBtn.style.display = 'flex';
            if (this.submitBtn) this.submitBtn.style.display = 'none';
        }
    }

    setupConditionalLogic() {
        // Show/hide specialized course sections based on business operations
        const tourismCheckboxes = document.querySelectorAll('input[name="tourismAreas"]');
        const hospitalitySection = document.getElementById('hospitalityTrackSection');
        const tourismSection = document.getElementById('tourismTrackSection');
        
        tourismCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const selectedValues = Array.from(document.querySelectorAll('input[name="tourismAreas"]:checked'))
                    .map(cb => cb.value);
                
                // Show hospitality track if accommodation or food-beverage is selected
                const showHospitality = selectedValues.some(val => 
                    ['accommodation', 'food-beverage'].includes(val)
                );
                
                // Show tourism track if tour-operations, transportation, or attractions is selected
                const showTourism = selectedValues.some(val => 
                    ['tour-operations', 'transportation', 'attractions', 'event-management'].includes(val)
                );
                
                if (hospitalitySection) {
                    hospitalitySection.style.display = showHospitality ? 'block' : 'none';
                    if (showHospitality) {
                        hospitalitySection.classList.add('fade-in');
                    }
                }
                
                if (tourismSection) {
                    tourismSection.style.display = showTourism ? 'block' : 'none';
                    if (showTourism) {
                        tourismSection.classList.add('fade-in');
                    }
                }
            });
        });

        // Handle "Other" option text input enabling/disabling
        const otherCheckboxes = document.querySelectorAll('input[value="other"]');
        otherCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const otherInput = checkbox.closest('.other-option').querySelector('.other-input');
                if (otherInput) {
                    if (checkbox.checked) {
                        otherInput.disabled = false;
                        otherInput.focus();
                        otherInput.style.opacity = '1';
                        otherInput.style.pointerEvents = 'auto';
                    } else {
                        otherInput.disabled = true;
                        otherInput.value = '';
                        otherInput.style.opacity = '0.5';
                        otherInput.style.pointerEvents = 'none';
                    }
                }
            });
        });
    }

    setupFieldValidation() {
        // Real-time validation for required fields
        const requiredFields = document.querySelectorAll('input[required], textarea[required]');
        
        requiredFields.forEach(field => {
            field.addEventListener('blur', () => this.validateField(field));
            field.addEventListener('input', () => this.clearFieldError(field));
        });

        // Character count for textareas
        const textareas = document.querySelectorAll('textarea');
        textareas.forEach(textarea => {
            const counterElement = textarea.parentElement.querySelector('.character-count');
            if (counterElement) {
                textarea.addEventListener('input', () => {
                    counterElement.textContent = `${textarea.value.length} characters`;
                });
            }
        });
    }

    validateField(field) {
        const feedback = field.parentElement.querySelector('.field-feedback');
        if (!feedback) return;

        if (field.hasAttribute('required') && !field.value.trim()) {
            field.classList.add('error');
            feedback.textContent = 'This field is required';
            feedback.className = 'field-feedback error';
            return false;
        } else {
            field.classList.remove('error');
            field.classList.add('success');
            feedback.textContent = '✓';
            feedback.className = 'field-feedback success';
            return true;
        }
    }

    clearFieldError(field) {
        if (field.value.trim()) {
            field.classList.remove('error');
            const feedback = field.parentElement.querySelector('.field-feedback');
            if (feedback) {
                feedback.textContent = '';
                feedback.className = 'field-feedback';
            }
        }
    }

    setupAutoSave() {
        // Auto-save form data to localStorage
        const form = document.getElementById('entrepreneurSurveyForm');
        if (!form) return;

        const saveData = () => {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            localStorage.setItem('surveyDraft', JSON.stringify(data));
            this.showAutoSaveNotification();
        };

        // Save data on input changes (debounced)
        let saveTimeout;
        form.addEventListener('input', () => {
            clearTimeout(saveTimeout);
            saveTimeout = setTimeout(saveData, 1000);
        });
    }

    showAutoSaveNotification() {
        // Show subtle auto-save notification
        const notification = document.createElement('div');
        notification.className = 'auto-save-notification';
        notification.innerHTML = '<i class="fas fa-save"></i> Draft saved';
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        
        console.log('SimpleFormSubmit: Submit clicked!');
        
        if (this.isSubmitting) {
            console.log('SimpleFormSubmit: Already submitting, ignoring click');
            return;
        }
        
        this.isSubmitting = true;
        this.submitBtn.disabled = true;
        this.submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
        
        try {
            this.processSubmission();
        } catch (error) {
            console.error('SimpleFormSubmit: Error during submission:', error);
            alert('Error during submission: ' + error.message);
            this.resetButton();
        }
    }

    async processSubmission() {
        console.log('SimpleFormSubmit: Processing submission...');
        
        // Collect all form data
        const formData = this.collectFormData();
        
        console.log('SimpleFormSubmit: Form data collected:', formData);
        
        // Always save to localStorage as backup
        this.saveToLocalStorage(formData);
        
        try {
            // Check network connectivity
            if (!this.isOnline) {
                console.log('Offline detected - saving for later submission');
                this.saveOfflineSubmission(formData);
                this.resetButton();
                return;
            }
            
            // Try Firebase submission
            const success = await this.submitToFirebase(formData);
            
            if (success) {
                // Clear draft since submission was successful
                this.clearDraft();
                this.showToast('form_submitted_success', 'success');
                this.showSuccess(formData);
            } else {
                // Firebase failed but we're online - save for retry
                this.saveOfflineSubmission(formData);
                this.showToast('network_error', 'error');
                this.resetButton();
            }
            
        } catch (error) {
            console.error('Submission error:', error);
            // Save for offline retry
            this.saveOfflineSubmission(formData);
            this.showToast('submission_failed', 'error');
            this.resetButton();
        }
    }

    // Enhanced Firebase submission with proper error handling
    async submitToFirebase(formData) {
        try {
            console.log('🔍 Checking Firebase availability...');
            console.log('window.firebaseConfig exists:', !!window.firebaseConfig);
            console.log('createDocument method exists:', !!(window.firebaseConfig && window.firebaseConfig.createDocument));
            
            if (!window.firebaseConfig || !window.firebaseConfig.createDocument) {
                console.error('❌ Firebase not available or createDocument method missing');
                return false;
            }

            console.log('📤 Attempting Firebase submission...');
            console.log('Submitting data:', JSON.stringify(formData, null, 2));
            
            const result = await window.firebaseConfig.createDocument('entrepreneur-surveys', formData);
            console.log('🔍 Firebase submission result:', result);
            
            if (result && result.success) {
                console.log('✅ Firebase submission successful:', result.id);
                return true;
            } else {
                console.error('❌ Firebase submission failed:', result ? result.error : 'No result returned');
                return false;
            }
            
        } catch (error) {
            console.error('💥 Firebase submission error:', error);
            console.error('Error stack:', error.stack);
            return false;
        }
    }

    collectFormData() {
        const data = {
            submissionId: 'SUBMIT_' + Date.now(),
            submittedAt: new Date().toISOString(),
            formType: 'entrepreneur-survey'
        };
        
        // Get all form inputs
        const inputs = this.form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            const name = input.name || input.id;
            if (!name) return;
            
            if (input.type === 'checkbox') {
                if (input.checked) {
                    if (!data[name]) data[name] = [];
                    data[name].push(input.value);
                }
            } else if (input.type === 'radio') {
                if (input.checked) {
                    data[name] = input.value;
                }
            } else {
                // CRITICAL FIX: Always capture the value, even if empty
                // This ensures all form fields are recorded, whether filled or not
                data[name] = input.value ? input.value.trim() : '';
            }
        });
        
        // Ensure checkbox groups are properly initialized as arrays
        // This fixes the issue where unchecked checkboxes weren't being captured
        const checkboxNames = ['behavioralSkills', 'benefits'];
        checkboxNames.forEach(name => {
            if (!data[name]) data[name] = [];
        });
        
        // Handle dynamic positions data
        this.processPositionsData(data);
        
        return data;
    }
    
    processPositionsData(data) {
        // Check if we have multiple positions mode
        if (this.currentPositionMode === 'multiple') {
            const positionsGrid = document.getElementById('positionsGrid');
            if (positionsGrid) {
                const positionCards = positionsGrid.querySelectorAll('.position-card');
                data.positions = [];
                
                positionCards.forEach((card, index) => {
                    const positionNumber = index + 1;
                    const positionData = this.getPositionData(positionNumber);
                    
                    if (positionData.jobTitle) { // Only add if position has a job title
                        data.positions.push({
                            positionNumber: positionNumber,
                            ...positionData
                        });
                    }
                });
                
                // Calculate total positions
                data.totalPositions = data.positions.length;
            }
        } else {
            // Single position mode - collect position data from regular form fields
            const singlePositionData = this.collectSinglePositionData(data);
            if (singlePositionData.jobTitle) {
                data.positions = [singlePositionData];
                data.totalPositions = 1;
            }
        }
    }
    
    collectSinglePositionData(data) {
        // Map single position fields to position structure with comprehensive field coverage
        return {
            positionNumber: 1,
            jobTitle: data.jobTitle || 'Not specified',
            workType: data.workType || 'Not specified',
            workMode: data.workMode || 'Not specified',
            startDate: data.startDate || 'Not specified',
            contractType: data.contractType || 'Not specified',
            jobSummary: data.jobSummary || 'Not provided',
            keyResponsibilities: data.keyResponsibilities || 'Not provided',
            experienceLevel: data.experienceLevel || 'Not specified',
            educationLevel: data.educationLevel || 'Not specified',
            technicalSkills: data.technicalSkills || 'Not specified',
            behavioralSkills: data.behavioralSkills || [],
            otherBehavioralSkills: data.otherBehavioralSkills || 'Not specified',
            workEnvironment: data.workEnvironment || 'Not specified',
            idealAge: data.idealAge || 'Not specified',
            idealGender: data.idealGender || 'Not specified',
            idealLocation: data.idealLocation || 'Not specified',
            salaryRange: data.salaryRange || 'Not specified',
            benefits: data.benefits || [],
            otherBenefits: data.otherBenefits || 'Not specified',
            workingHours: data.workingHours || 'Not specified',
            additionalNotes: data.additionalNotes || 'Not specified'
        };
    }

    saveToLocalStorage(data) {
        try {
            const submissions = JSON.parse(localStorage.getItem('employer-submissions') || '[]');
            submissions.push(data);
            localStorage.setItem('employer-submissions', JSON.stringify(submissions));
            localStorage.setItem('latest-submission', JSON.stringify(data));
            
            console.log('SimpleFormSubmit: Saved to localStorage. Total submissions:', submissions.length);
            console.table([data]);
            
        } catch (error) {
            console.error('SimpleFormSubmit: LocalStorage save failed:', error);
        }
    }

    // This function is now replaced by submitToFirebase for better error handling

    showSuccess(data) {
        console.log('SimpleFormSubmit: Showing beautiful success popup');
        
        // Create beautiful popup overlay
        const popup = document.createElement('div');
        popup.className = 'notification-overlay';
        popup.innerHTML = `
            <div class="notification-popup">
                <div class="notification-icon">
                    <i class="fas fa-check"></i>
                </div>
                <h1 class="notification-title">Success!</h1>
                <p class="notification-message">Thank you for completing the Expert Support Matching survey! We will review your information and connect you with the right expert support for your business growth needs.</p>
                <div class="notification-details">
                    <strong>Submission ID:</strong> ${data.submissionId}<br>
                    <strong>Time:</strong> ${this.formatDate(data.submittedAt, 'Just now')}
                </div>
                <button class="notification-action" onclick="window.location.reload()">
                    Submit Another Assessment
                </button>
            </div>
        `;
        
        // Add to page
        document.body.appendChild(popup);
        
        // Show with animation
        setTimeout(() => {
            popup.classList.add('show');
        }, 100);
        
        // Auto-remove after clicking or timeout
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                this.hideNotification(popup);
            }
        });
        
        // Auto-hide after 8 seconds
        setTimeout(() => {
            if (popup.parentNode) {
                this.hideNotification(popup);
            }
        }, 8000);
    }

    hideNotification(popup) {
        popup.classList.remove('show');
        setTimeout(() => {
            if (popup.parentNode) {
                popup.parentNode.removeChild(popup);
            }
        }, 300);
    }

    resetButton() {
        this.isSubmitting = false;
        this.submitBtn.disabled = false;
        this.submitBtn.innerHTML = '<i class="fas fa-check"></i> SUBMIT FORM';
    }

    // ======================
    // USER GUIDE SYSTEM
    // ======================

    initUserGuide() {
        this.currentGuideStep = 1;
        this.totalGuideSteps = 5;
        
        // Check if user has seen the guide before
        const hasSeenGuide = localStorage.getItem('bpn_guide_seen');
        
        // Show guide on first visit
        if (!hasSeenGuide) {
            setTimeout(() => {
                this.showUserGuide();
            }, 1000); // Small delay to ensure page is loaded
        }
        
        // Set up click outside to close dropdowns
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.user-guide-overlay')) {
                // Handle click outside guide if needed
            }
        });
    }

    showUserGuide() {
        const overlay = document.getElementById('userGuideOverlay');
        if (overlay) {
            overlay.classList.add('show');
            this.updateGuideStep(1);
        }
    }

    closeUserGuide() {
        const overlay = document.getElementById('userGuideOverlay');
        if (overlay) {
            overlay.classList.remove('show');
            
            // Check if user selected "don't show again"
            const dontShowCheckbox = document.getElementById('dontShowAgain');
            if (dontShowCheckbox && dontShowCheckbox.checked) {
                localStorage.setItem('bpn_guide_seen', 'true');
            }
        }
    }

    nextGuideStep() {
        if (this.currentGuideStep < this.totalGuideSteps) {
            this.currentGuideStep++;
            this.updateGuideStep(this.currentGuideStep);
        }
    }

    previousGuideStep() {
        if (this.currentGuideStep > 1) {
            this.currentGuideStep--;
            this.updateGuideStep(this.currentGuideStep);
        }
    }

    updateGuideStep(stepNumber) {
        // Update step content
        const steps = document.querySelectorAll('.guide-step');
        steps.forEach((step, index) => {
            if (index + 1 === stepNumber) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });

        // Update step indicators
        const dots = document.querySelectorAll('.step-dot');
        dots.forEach((dot, index) => {
            if (index + 1 === stepNumber) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        // Update navigation buttons
        const prevBtn = document.querySelector('.guide-prev');
        const nextBtn = document.querySelector('.guide-next');
        const startBtn = document.querySelector('.guide-start');

        if (prevBtn) {
            prevBtn.disabled = stepNumber === 1;
        }

        if (nextBtn && startBtn) {
            if (stepNumber === this.totalGuideSteps) {
                nextBtn.style.display = 'none';
                startBtn.style.display = 'flex';
            } else {
                nextBtn.style.display = 'flex';
                startBtn.style.display = 'none';
            }
        }

        this.currentGuideStep = stepNumber;
    }

    startUsingForm() {
        // Mark guide as seen and close
        localStorage.setItem('bpn_guide_seen', 'true');
        this.closeUserGuide();
        
        // Optional: Scroll to form or highlight first input
        const firstInput = document.querySelector('input[type="text"]');
        if (firstInput) {
            firstInput.focus();
            firstInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    // Method to show guide again (can be called from dev tools or hidden button)
    showGuideAgain() {
        localStorage.removeItem('bpn_guide_seen');
        this.showUserGuide();
    }

    // Toggle insights dropdown
    toggleInsightsDropdown() {
        const dropdown = document.getElementById('insightfulMetrics');
        const arrow = document.querySelector('.dropdown-arrow i');
        
        if (!dropdown || !arrow) return;
        
        const isVisible = dropdown.style.display !== 'none';
        
        if (isVisible) {
            dropdown.style.display = 'none';
            arrow.style.transform = 'rotate(0deg)';
        } else {
            dropdown.style.display = 'block';
            arrow.style.transform = 'rotate(180deg)';
        }
        
        // Add smooth animation
        dropdown.style.transition = 'all 0.3s ease';
        arrow.style.transition = 'transform 0.3s ease';
    }
}

// Initialize immediately
const simpleSubmit = new SimpleFormSubmit();
simpleSubmit.init();

// Make globally available for debugging and admin panel
window.simpleSubmit = simpleSubmit;
window.simpleFormSubmit = simpleSubmit;