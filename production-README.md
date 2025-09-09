# Expert Support Matching Platform - Production Version

## Overview
This is a production-ready Expert Support Matching survey application designed to connect entrepreneurs with expert support for business growth.

## Key Features
- Multi-step entrepreneur assessment form (4 sections)
- Professional design with BPN branding and glassmorphism effects
- Firebase integration for data submission
- LocalStorage backup for offline functionality
- Mobile-responsive design with bilingual support (English/Kinyarwanda)
- Form validation and error handling

## Production Files
### Essential Files:
- `index.html` - Main application page
- `styles.css` - Production CSS (cleaned of admin code)
- `js/firebase-config.js` - Firebase integration
- `js/utils.js` - Utility functions
- `js/simple-submit.js` - Form submission handler
- `firestore.rules` - Firebase security rules
- `attached_assets/` - Partner logos and branding assets

### Removed for Production:
- All admin dashboard components
- Survey builder interface
- Analytics components  
- Test files and debugging tools
- Development-only configuration files

## Deployment
1. Configure Firebase project with provided security rules
2. Update Firebase configuration in `js/firebase-config.js`
3. Deploy to web server or Firebase hosting

## Form Data Structure
Submissions are saved to Firestore collection `entrepreneur-assessments` with:
- Personal and business information
- Current business challenges
- Expert support needs and desired outcomes
- Commitment and follow-up preferences
- Submission metadata (timestamp, device info)

## Support
For deployment assistance or configuration questions, refer to the Firebase console and security rules documentation.