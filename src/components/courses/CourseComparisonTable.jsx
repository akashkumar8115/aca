import React from 'react'
import { motion } from 'framer-motion'

const courseData = {
    Engineering: [
        {
            id: 1,
            name: 'B.Tech Computer Science',
            duration: '4 years',
            fees: '8-12 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Software Engineer', 'Data Scientist', 'System Analyst']
        },
        {
            id: 2,
            name: 'B.Tech Mechanical',
            duration: '4 years',
            fees: '6-10 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Mechanical Engineer', 'Design Engineer', 'Project Manager']
        },
        {
            id: 3,
            name: 'B.Tech Civil',
            duration: '4 years',
            fees: '5-8 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Civil Engineer', 'Construction Manager', 'Urban Planner']
        },
        {
            id: 4,
            name: 'B.Tech Electronics & Communication',
            duration: '4 years',
            fees: '7-11 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Telecom Engineer', 'Embedded Systems Developer', 'Network Analyst']
        },
        {
            id: 5,
            name: 'B.Tech Information Technology',
            duration: '4 years',
            fees: '7-12 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['IT Analyst', 'Web Developer', 'Cybersecurity Specialist']
        },
        {
            id: 6,
            name: 'B.Tech Electrical Engineering',
            duration: '4 years',
            fees: '7-11 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Electrical Engineer', 'Power Systems Engineer', 'Automation Specialist']
        },
        {
            id: 7,
            name: 'B.Tech Aerospace Engineering',
            duration: '4 years',
            fees: '10-15 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Aerospace Engineer', 'Avionics Engineer', 'Research Scientist']
        },
        {
            id: 8,
            name: 'B.Tech Biotechnology',
            duration: '4 years',
            fees: '6-10 Lakhs',
            eligibility: '10+2 with PCB/PCM',
            careers: ['Biotechnologist', 'Pharmaceutical Researcher', 'Environmental Engineer']
        },
        {
            id: 9,
            name: 'B.Tech Chemical Engineering',
            duration: '4 years',
            fees: '5-9 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Chemical Engineer', 'Process Engineer', 'Production Manager']
        },
        {
            id: 10,
            name: 'B.Tech Petroleum Engineering',
            duration: '4 years',
            fees: '8-14 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Petroleum Engineer', 'Reservoir Engineer', 'Drilling Engineer']
        },
        {
            id: 11,
            name: 'B.Tech Environmental Engineering',
            duration: '4 years',
            fees: '6-9 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Environmental Engineer', 'Sustainability Consultant', 'Pollution Control Officer']
        },
        {
            id: 12,
            name: 'B.Tech Marine Engineering',
            duration: '4 years',
            fees: '8-12 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Marine Engineer', 'Naval Architect', 'Port Engineer']
        },
        {
            id: 13,
            name: 'B.Tech Mining Engineering',
            duration: '4 years',
            fees: '7-10 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Mining Engineer', 'Geotechnical Engineer', 'Resource Analyst']
        },
        {
            id: 14,
            name: 'B.Tech Metallurgical Engineering',
            duration: '4 years',
            fees: '5-9 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Metallurgical Engineer', 'Materials Scientist', 'Process Engineer']
        },
        {
            id: 15,
            name: 'B.Tech Agricultural Engineering',
            duration: '4 years',
            fees: '4-7 Lakhs',
            eligibility: '10+2 with PCM/PCB',
            careers: ['Agricultural Engineer', 'Irrigation Specialist', 'Food Technologist']
        },
        {
            id: 16,
            name: 'B.Tech Robotics Engineering',
            duration: '4 years',
            fees: '10-15 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Robotics Engineer', 'AI Specialist', 'Automation Engineer']
        },
        {
            id: 17,
            name: 'B.Tech Textile Engineering',
            duration: '4 years',
            fees: '5-8 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Textile Engineer', 'Product Developer', 'Quality Control Manager']
        },
        {
            id: 18,
            name: 'B.Tech Automobile Engineering',
            duration: '4 years',
            fees: '6-10 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Automobile Engineer', 'Vehicle Designer', 'Manufacturing Engineer']
        },
        {
            id: 19,
            name: 'B.Tech Data Science',
            duration: '4 years',
            fees: '8-12 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Data Scientist', 'AI Developer', 'Business Analyst']
        },
        {
            id: 20,
            name: 'B.Tech Cybersecurity',
            duration: '4 years',
            fees: '9-14 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Cybersecurity Analyst', 'Ethical Hacker', 'Information Security Manager']
        }
    ],
    Management: [
        {
            id: 6,
            name: 'BBA',
            duration: '3 years',
            fees: '3-7 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Business Manager', 'Entrepreneur', 'Marketing Executive']
        },
        {
            id: 7,
            name: 'MBA',
            duration: '2 years',
            fees: '10-20 Lakhs',
            eligibility: 'Graduate in any field',
            careers: ['Business Consultant', 'Finance Manager', 'Operations Manager']
        },
        {
            id: 8,
            name: 'PGDM',
            duration: '2 years',
            fees: '8-18 Lakhs',
            eligibility: 'Graduate in any field',
            careers: ['HR Manager', 'Strategy Consultant', 'Product Manager']
        },
        {
            id: 9,
            name: 'BMS (Bachelor of Management Studies)',
            duration: '3 years',
            fees: '3-6 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Business Analyst', 'Marketing Specialist', 'HR Coordinator']
        },
        {
            id: 10,
            name: 'B.Com Management',
            duration: '3 years',
            fees: '3-5 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Financial Analyst', 'Account Manager', 'Tax Consultant']
        },
        {
            id: 11,
            name: 'Executive MBA',
            duration: '1 year',
            fees: '15-30 Lakhs',
            eligibility: 'Graduate with work experience',
            careers: ['Senior Manager', 'CEO', 'Operations Head']
        },
        {
            id: 12,
            name: 'Hotel Management (BHM)',
            duration: '3-4 years',
            fees: '3-8 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Hotel Manager', 'Event Planner', 'Food and Beverage Manager']
        },
        {
            id: 13,
            name: 'Event Management',
            duration: '1-3 years',
            fees: '2-5 Lakhs',
            eligibility: '10+2 or Graduate',
            careers: ['Event Manager', 'Wedding Planner', 'PR Executive']
        },
        {
            id: 14,
            name: 'Retail Management',
            duration: '1-3 years',
            fees: '2-6 Lakhs',
            eligibility: '10+2 or Graduate',
            careers: ['Store Manager', 'Category Manager', 'Merchandiser']
        },
        {
            id: 15,
            name: 'Sports Management',
            duration: '2 years',
            fees: '5-10 Lakhs',
            eligibility: 'Graduate in any field',
            careers: ['Sports Manager', 'Event Coordinator', 'Athlete Manager']
        },
        {
            id: 16,
            name: 'Logistics and Supply Chain Management',
            duration: '2 years',
            fees: '7-12 Lakhs',
            eligibility: 'Graduate in any field',
            careers: ['Logistics Manager', 'Supply Chain Analyst', 'Operations Consultant']
        },
        {
            id: 17,
            name: 'Healthcare Management',
            duration: '2 years',
            fees: '10-15 Lakhs',
            eligibility: 'Graduate in any field',
            careers: ['Hospital Administrator', 'Healthcare Consultant', 'Medical Manager']
        },
        {
            id: 18,
            name: 'Digital Marketing Management',
            duration: '1-2 years',
            fees: '2-6 Lakhs',
            eligibility: 'Graduate in any field',
            careers: ['Digital Marketing Specialist', 'SEO Manager', 'Content Strategist']
        },
        {
            id: 19,
            name: 'Entrepreneurship Development',
            duration: '1-2 years',
            fees: '5-10 Lakhs',
            eligibility: 'Graduate in any field',
            careers: ['Startup Founder', 'Business Consultant', 'Venture Capitalist']
        },
        {
            id: 20,
            name: 'Hospitality Management',
            duration: '3 years',
            fees: '3-8 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Hotel Manager', 'Tourism Manager', 'Guest Relations Executive']
        },
        {
            id: 21,
            name: 'Financial Management',
            duration: '2 years',
            fees: '8-15 Lakhs',
            eligibility: 'Graduate in any field',
            careers: ['Finance Analyst', 'Investment Banker', 'Portfolio Manager']
        },
        {
            id: 22,
            name: 'Strategic Management',
            duration: '2 years',
            fees: '9-16 Lakhs',
            eligibility: 'Graduate in any field',
            careers: ['Corporate Strategist', 'Policy Advisor', 'Business Development Manager']
        },
        {
            id: 23,
            name: 'Marketing Management',
            duration: '2 years',
            fees: '8-14 Lakhs',
            eligibility: 'Graduate in any field',
            careers: ['Marketing Manager', 'Brand Strategist', 'Market Research Analyst']
        },
        {
            id: 24,
            name: 'International Business Management',
            duration: '2 years',
            fees: '10-18 Lakhs',
            eligibility: 'Graduate in any field',
            careers: ['International Trade Manager', 'Export Consultant', 'Global Business Analyst']
        },
        {
            id: 25,
            name: 'Public Policy and Management',
            duration: '1-2 years',
            fees: '6-12 Lakhs',
            eligibility: 'Graduate in any field',
            careers: ['Policy Analyst', 'NGO Manager', 'Public Administrator']
        }
    ],

    Medical: [
        {
            id: 9,
            name: 'MBBS',
            duration: '5.5 years',
            fees: '10-20 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Doctor', 'Surgeon', 'Medical Researcher']
        },
        {
            id: 10,
            name: 'BDS',
            duration: '5 years',
            fees: '7-15 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Dentist', 'Oral Surgeon', 'Orthodontist']
        },
        {
            id: 11,
            name: 'B.Sc Nursing',
            duration: '4 years',
            fees: '2-6 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Nurse', 'Healthcare Administrator', 'Midwife']
        },
        {
            id: 12,
            name: 'BHMS (Bachelor of Homeopathic Medicine and Surgery)',
            duration: '5.5 years',
            fees: '2-5 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Homeopathic Doctor', 'Consultant', 'Researcher']
        },
        {
            id: 13,
            name: 'BAMS (Bachelor of Ayurvedic Medicine and Surgery)',
            duration: '5.5 years',
            fees: '3-6 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Ayurvedic Practitioner', 'Therapist', 'Pharmacist']
        },
        {
            id: 14,
            name: 'BUMS (Bachelor of Unani Medicine and Surgery)',
            duration: '5 years',
            fees: '2-5 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Unani Practitioner', 'Health Officer', 'Researcher']
        },
        {
            id: 15,
            name: 'BPT (Bachelor of Physiotherapy)',
            duration: '4.5 years',
            fees: '2-6 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Physiotherapist', 'Sports Therapist', 'Rehabilitation Specialist']
        },
        {
            id: 16,
            name: 'BOT (Bachelor of Occupational Therapy)',
            duration: '4.5 years',
            fees: '2-6 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Occupational Therapist', 'Rehabilitation Counselor', 'Healthcare Trainer']
        },
        {
            id: 17,
            name: 'B.Sc Medical Laboratory Technology (MLT)',
            duration: '3 years',
            fees: '2-4 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Lab Technician', 'Pathologist', 'Quality Analyst']
        },
        {
            id: 18,
            name: 'B.Optometry',
            duration: '4 years',
            fees: '2-6 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Optometrist', 'Vision Consultant', 'Eye Care Specialist']
        },
        {
            id: 19,
            name: 'B. Pharm (Bachelor of Pharmacy)',
            duration: '4 years',
            fees: '3-7 Lakhs',
            eligibility: '10+2 with PCB/PCM',
            careers: ['Pharmacist', 'Clinical Researcher', 'Drug Inspector']
        },
        {
            id: 20,
            name: 'B.Sc Radiology',
            duration: '3 years',
            fees: '3-6 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Radiologist', 'MRI Technician', 'Ultrasound Specialist']
        },
        {
            id: 21,
            name: 'B.Sc Nutrition and Dietetics',
            duration: '3 years',
            fees: '2-5 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Dietitian', 'Nutrition Consultant', 'Public Health Educator']
        },
        {
            id: 22,
            name: 'B.Sc Anesthesia Technology',
            duration: '3 years',
            fees: '3-6 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Anesthesia Technologist', 'Operation Theater Assistant', 'Clinical Supervisor']
        },
        {
            id: 23,
            name: 'B.Sc Cardiac Care Technology',
            duration: '3 years',
            fees: '3-6 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Cardiac Technologist', 'Echo Technician', 'Cardiac Rehabilitation Specialist']
        },
        {
            id: 24,
            name: 'B.Sc Respiratory Therapy',
            duration: '3 years',
            fees: '2-5 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Respiratory Therapist', 'Pulmonary Care Specialist', 'Critical Care Assistant']
        },
        {
            id: 25,
            name: 'B.Sc Forensic Science',
            duration: '3 years',
            fees: '3-6 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Forensic Scientist', 'Crime Scene Investigator', 'Toxicologist']
        },
        {
            id: 26,
            name: 'B.Sc Genetics',
            duration: '3 years',
            fees: '3-6 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Geneticist', 'Research Scientist', 'Biomedical Researcher']
        },
        {
            id: 27,
            name: 'Bachelor of Public Health (BPH)',
            duration: '3 years',
            fees: '2-5 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Public Health Officer', 'Health Educator', 'Policy Analyst']
        },
        {
            id: 28,
            name: 'B.Sc Ophthalmic Technology',
            duration: '3 years',
            fees: '3-6 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Ophthalmic Technician', 'Vision Specialist', 'Eye Health Consultant']
        }
    ],

    ArtsAndHumanities: [
        {
            id: 61,
            name: 'BA English Literature',
            duration: '3 years',
            fees: '1-3 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Writer', 'Editor', 'Teacher']
        },
        {
            id: 62,
            name: 'BA History',
            duration: '3 years',
            fees: '1-3 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Historian', 'Museum Curator', 'Archivist']
        },
        {
            id: 63,
            name: 'BA Psychology',
            duration: '3 years',
            fees: '2-4 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Psychologist', 'Counselor', 'HR Specialist']
        },
        {
            id: 64,
            name: 'BA Sociology',
            duration: '3 years',
            fees: '1-3 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Social Worker', 'Policy Analyst', 'Urban Planner']
        },
        {
            id: 65,
            name: 'BA Political Science',
            duration: '3 years',
            fees: '1-3 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Politician', 'Diplomat', 'Civil Servant']
        },
        {
            id: 66,
            name: 'BA Philosophy',
            duration: '3 years',
            fees: '1-2 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Ethicist', 'Philosopher', 'Academic Researcher']
        },
        {
            id: 67,
            name: 'BA Journalism and Mass Communication',
            duration: '3 years',
            fees: '2-5 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Journalist', 'Media Planner', 'News Anchor']
        },
        {
            id: 68,
            name: 'BA Economics',
            duration: '3 years',
            fees: '2-4 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Economist', 'Data Analyst', 'Market Researcher']
        },
        {
            id: 69,
            name: 'BA Fine Arts',
            duration: '3 years',
            fees: '2-5 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Painter', 'Art Director', 'Graphic Designer']
        },
        {
            id: 70,
            name: 'BA Music',
            duration: '3 years',
            fees: '1-3 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Musician', 'Composer', 'Music Teacher']
        },
        {
            id: 71,
            name: 'BA Theatre and Performing Arts',
            duration: '3 years',
            fees: '2-5 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Actor', 'Theatre Director', 'Drama Teacher']
        },
        {
            id: 72,
            name: 'BA Anthropology',
            duration: '3 years',
            fees: '2-4 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Anthropologist', 'Cultural Analyst', 'NGO Specialist']
        },
        {
            id: 73,
            name: 'BA Film Studies',
            duration: '3 years',
            fees: '3-6 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Film Critic', 'Director', 'Screenwriter']
        },
        {
            id: 74,
            name: 'BA International Relations',
            duration: '3 years',
            fees: '2-4 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Diplomat', 'Policy Advisor', 'Intelligence Analyst']
        },
        {
            id: 75,
            name: 'BA Geography',
            duration: '3 years',
            fees: '1-3 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Cartographer', 'Urban Planner', 'Geospatial Analyst']
        },
        {
            id: 76,
            name: 'BA Linguistics',
            duration: '3 years',
            fees: '2-5 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Linguist', 'Translator', 'Speech Therapist']
        },
        {
            id: 77,
            name: 'BA Public Administration',
            duration: '3 years',
            fees: '1-3 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Public Administrator', 'Civil Servant', 'Policy Maker']
        },
        {
            id: 78,
            name: 'BA Religious Studies',
            duration: '3 years',
            fees: '1-2 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Theologian', 'Religious Scholar', 'Educator']
        },
        {
            id: 79,
            name: 'BA Gender Studies',
            duration: '3 years',
            fees: '2-4 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Gender Consultant', 'Advocacy Specialist', 'Researcher']
        },
        {
            id: 80,
            name: 'BA Visual Communication',
            duration: '3 years',
            fees: '2-5 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Graphic Designer', 'Creative Director', 'Animator']
        },
        {
            id: 81,
            name: 'BA Cultural Studies',
            duration: '3 years',
            fees: '2-4 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Cultural Analyst', 'Curator', 'Academician']
        }
    ],


    Science: [
        {
            id: 82,
            name: 'B.Sc Biotechnology',
            duration: '3 years',
            fees: '4-8 Lakhs',
            eligibility: '10+2 with PCB/PCM',
            careers: ['Biotechnologist', 'Research Scientist', 'Lab Technician']
        },
        {
            id: 83,
            name: 'B.Sc Physics',
            duration: '3 years',
            fees: '2-5 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Physicist', 'Research Analyst', 'Professor']
        },
        {
            id: 84,
            name: 'B.Sc Chemistry',
            duration: '3 years',
            fees: '2-5 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Chemist', 'Pharmaceutical Scientist', 'Environmental Consultant']
        },
        {
            id: 85,
            name: 'B.Sc Mathematics',
            duration: '3 years',
            fees: '2-4 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Mathematician', 'Statistician', 'Data Analyst']
        },
        {
            id: 86,
            name: 'B.Sc Computer Science',
            duration: '3 years',
            fees: '3-6 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Software Developer', 'Data Scientist', 'IT Consultant']
        },
        {
            id: 87,
            name: 'B.Sc Environmental Science',
            duration: '3 years',
            fees: '3-7 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Environmental Consultant', 'Ecologist', 'Sustainability Expert']
        },
        {
            id: 88,
            name: 'B.Sc Zoology',
            duration: '3 years',
            fees: '2-5 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Zoologist', 'Wildlife Biologist', 'Marine Biologist']
        },
        {
            id: 89,
            name: 'B.Sc Botany',
            duration: '3 years',
            fees: '2-5 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Botanist', 'Horticulturist', 'Plant Researcher']
        },
        {
            id: 90,
            name: 'B.Sc Microbiology',
            duration: '3 years',
            fees: '3-6 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Microbiologist', 'Lab Technician', 'Clinical Researcher']
        },
        {
            id: 91,
            name: 'B.Sc Genetics',
            duration: '3 years',
            fees: '4-7 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Geneticist', 'Genomics Researcher', 'Forensic Scientist']
        },
        {
            id: 92,
            name: 'B.Sc Geology',
            duration: '3 years',
            fees: '3-5 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Geologist', 'Environmental Consultant', 'Mining Engineer']
        },
        {
            id: 93,
            name: 'B.Sc Astronomy',
            duration: '3 years',
            fees: '4-8 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Astronomer', 'Astrophysicist', 'Space Scientist']
        },
        {
            id: 94,
            name: 'B.Sc Agriculture',
            duration: '4 years',
            fees: '3-6 Lakhs',
            eligibility: '10+2 with PCB/PCM',
            careers: ['Agronomist', 'Farm Manager', 'Agricultural Scientist']
        },
        {
            id: 95,
            name: 'B.Sc Forensic Science',
            duration: '3 years',
            fees: '4-7 Lakhs',
            eligibility: '10+2 with PCB/PCM',
            careers: ['Forensic Scientist', 'Crime Scene Investigator', 'Forensic Pathologist']
        },
        {
            id: 96,
            name: 'B.Sc Clinical Research',
            duration: '3 years',
            fees: '4-8 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Clinical Research Associate', 'Pharmaceutical Scientist', 'Clinical Data Manager']
        },
        {
            id: 97,
            name: 'B.Sc Biochemistry',
            duration: '3 years',
            fees: '3-6 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Biochemist', 'Pharmaceutical Researcher', 'Medical Researcher']
        },
        {
            id: 98,
            name: 'B.Sc Toxicology',
            duration: '3 years',
            fees: '4-7 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Toxicologist', 'Environmental Health Consultant', 'Pharmacologist']
        },
        {
            id: 99,
            name: 'B.Sc Food Science',
            duration: '3 years',
            fees: '2-5 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Food Scientist', 'Nutritionist', 'Food Quality Analyst']
        },
        {
            id: 100,
            name: 'B.Sc Fisheries Science',
            duration: '3 years',
            fees: '2-5 Lakhs',
            eligibility: '10+2 with PCB',
            careers: ['Fisheries Biologist', 'Aquaculture Manager', 'Marine Conservationist']
        },
        {
            id: 101,
            name: 'B.Sc Horticulture',
            duration: '3 years',
            fees: '3-6 Lakhs',
            eligibility: '10+2 with PCB/PCM',
            careers: ['Horticulturist', 'Agricultural Consultant', 'Plant Breeder']
        }
    ],


    Commerce: [
        {
            id: 102,
            name: 'B.Com',
            duration: '3 years',
            fees: '1-3 Lakhs',
            eligibility: '10+2 in Commerce stream',
            careers: ['Accountant', 'Tax Consultant', 'Banking Professional']
        },
        {
            id: 103,
            name: 'B.Com Honours',
            duration: '3 years',
            fees: '2-5 Lakhs',
            eligibility: '10+2 in Commerce stream',
            careers: ['Chartered Accountant', 'Financial Analyst', 'Business Consultant']
        },
        {
            id: 104,
            name: 'BBA (Bachelor of Business Administration)',
            duration: '3 years',
            fees: '3-7 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Business Manager', 'Operations Manager', 'Entrepreneur']
        },
        {
            id: 105,
            name: 'MBA (Master of Business Administration)',
            duration: '2 years',
            fees: '10-20 Lakhs',
            eligibility: 'Graduate in any field',
            careers: ['Management Consultant', 'Marketing Director', 'Product Manager']
        },
        {
            id: 106,
            name: 'BMS (Bachelor of Management Studies)',
            duration: '3 years',
            fees: '2-5 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Business Analyst', 'Marketing Manager', 'Project Manager']
        },
        {
            id: 107,
            name: 'BFA (Bachelor of Financial Administration)',
            duration: '3 years',
            fees: '4-8 Lakhs',
            eligibility: '10+2 in Commerce stream',
            careers: ['Financial Advisor', 'Investment Banker', 'Insurance Manager']
        },
        {
            id: 108,
            name: 'B.A. Economics',
            duration: '3 years',
            fees: '1-3 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Economist', 'Policy Analyst', 'Economic Researcher']
        },
        {
            id: 109,
            name: 'M.Com (Master of Commerce)',
            duration: '2 years',
            fees: '3-6 Lakhs',
            eligibility: 'B.Com or equivalent',
            careers: ['Financial Analyst', 'Tax Consultant', 'Auditor']
        },
        {
            id: 110,
            name: 'BBA in Financial Services',
            duration: '3 years',
            fees: '4-8 Lakhs',
            eligibility: '10+2 in Commerce stream',
            careers: ['Investment Analyst', 'Financial Consultant', 'Wealth Manager']
        },
        {
            id: 111,
            name: 'BCA (Bachelor of Computer Applications)',
            duration: '3 years',
            fees: '3-6 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Software Developer', 'System Administrator', 'Web Developer']
        },
        {
            id: 112,
            name: 'CA (Chartered Accountant)',
            duration: '4-5 years',
            fees: '2-5 Lakhs',
            eligibility: '10+2 in Commerce stream',
            careers: ['Chartered Accountant', 'Auditor', 'Tax Consultant']
        },
        {
            id: 113,
            name: 'CS (Company Secretary)',
            duration: '3-5 years',
            fees: '2-4 Lakhs',
            eligibility: '10+2 in Commerce stream',
            careers: ['Company Secretary', 'Legal Advisor', 'Corporate Consultant']
        },
        {
            id: 114,
            name: 'B.Sc. (Hons) Economics',
            duration: '3 years',
            fees: '2-5 Lakhs',
            eligibility: '10+2 with Mathematics',
            careers: ['Economic Researcher', 'Economics Professor', 'Policy Consultant']
        },
        {
            id: 115,
            name: 'B.Com in Accounting and Finance',
            duration: '3 years',
            fees: '3-7 Lakhs',
            eligibility: '10+2 in Commerce stream',
            careers: ['Accountant', 'Financial Consultant', 'Investment Banker']
        },
        {
            id: 116,
            name: 'BBA in Marketing',
            duration: '3 years',
            fees: '3-6 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Marketing Executive', 'Brand Manager', 'Sales Manager']
        },
        {
            id: 117,
            name: 'BBA in International Business',
            duration: '3 years',
            fees: '3-7 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['International Business Consultant', 'Export Manager', 'Supply Chain Manager']
        },
        {
            id: 118,
            name: 'BBA in Human Resource Management',
            duration: '3 years',
            fees: '2-5 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['HR Manager', 'Talent Acquisition Specialist', 'HR Consultant']
        },
        {
            id: 119,
            name: 'B.Com with Taxation',
            duration: '3 years',
            fees: '2-4 Lakhs',
            eligibility: '10+2 in Commerce stream',
            careers: ['Tax Analyst', 'Tax Consultant', 'Corporate Tax Manager']
        },
        {
            id: 120,
            name: 'B.Com with Banking & Finance',
            duration: '3 years',
            fees: '2-6 Lakhs',
            eligibility: '10+2 in Commerce stream',
            careers: ['Banking Manager', 'Financial Analyst', 'Loan Officer']
        },
        {
            id: 121,
            name: 'Diploma in Accounting',
            duration: '1-2 years',
            fees: '1-3 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Accountant', 'Financial Analyst', 'Bookkeeper']
        }
    ],

    Law: [
        {
            id: 123,
            name: 'LLB',
            duration: '3 years',
            fees: '2-4 Lakhs',
            eligibility: 'Graduate in any stream',
            careers: ['Lawyer', 'Legal Advisor', 'Judge']
        },
        {
            id: 124,
            name: 'BA LLB',
            duration: '5 years',
            fees: '3-7 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Criminal Lawyer', 'Corporate Lawyer', 'Human Rights Lawyer']
        },
        {
            id: 125,
            name: 'BBA LLB',
            duration: '5 years',
            fees: '3-6 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Corporate Lawyer', 'Legal Advisor', 'Banking Legal Specialist']
        },
        {
            id: 126,
            name: 'LLM (Master of Laws)',
            duration: '1-2 years',
            fees: '4-10 Lakhs',
            eligibility: 'LLB or equivalent',
            careers: ['Legal Educator', 'Corporate Counsel', 'International Law Expert']
        },
        {
            id: 127,
            name: 'M.Phil in Law',
            duration: '2 years',
            fees: '5-10 Lakhs',
            eligibility: 'LLM or equivalent',
            careers: ['Law Researcher', 'Academician', 'Judicial Officer']
        },
        {
            id: 128,
            name: 'PhD in Law',
            duration: '3-5 years',
            fees: '5-12 Lakhs',
            eligibility: 'LLM or equivalent',
            careers: ['Legal Scholar', 'Law Professor', 'Judicial Member']
        },
        {
            id: 129,
            name: 'Diploma in Intellectual Property Rights',
            duration: '1 year',
            fees: '1-2 Lakhs',
            eligibility: 'Graduate in any stream',
            careers: ['IPR Consultant', 'Patent Agent', 'Trademark Lawyer']
        },
        {
            id: 130,
            name: 'Diploma in Cyber Law',
            duration: '1 year',
            fees: '1-3 Lakhs',
            eligibility: 'Graduate in any stream',
            careers: ['Cyber Lawyer', 'Cyber Security Consultant', 'Data Privacy Expert']
        },
        {
            id: 131,
            name: 'Diploma in Criminal Law',
            duration: '1 year',
            fees: '1-2 Lakhs',
            eligibility: 'Graduate in any stream',
            careers: ['Criminal Lawyer', 'Legal Consultant', 'Public Prosecutor']
        },
        {
            id: 132,
            name: 'Post Graduate Diploma in Human Rights',
            duration: '1 year',
            fees: '2-4 Lakhs',
            eligibility: 'Graduate in any stream',
            careers: ['Human Rights Lawyer', 'NGO Worker', 'Human Rights Activist']
        },
        {
            id: 133,
            name: 'LLB in Taxation Law',
            duration: '3 years',
            fees: '3-5 Lakhs',
            eligibility: 'Graduate in any stream',
            careers: ['Tax Lawyer', 'Tax Consultant', 'Corporate Tax Advisor']
        },
        {
            id: 134,
            name: 'LLB in International Law',
            duration: '3 years',
            fees: '4-8 Lakhs',
            eligibility: 'Graduate in any stream',
            careers: ['International Lawyer', 'Diplomatic Service Officer', 'Foreign Affairs Expert']
        },
        {
            id: 135,
            name: 'LLB in Family Law',
            duration: '3 years',
            fees: '2-4 Lakhs',
            eligibility: 'Graduate in any stream',
            careers: ['Family Lawyer', 'Divorce Lawyer', 'Child Custody Lawyer']
        },
        {
            id: 136,
            name: 'Post Graduate Diploma in Labour Laws',
            duration: '1 year',
            fees: '1-3 Lakhs',
            eligibility: 'Graduate in any stream',
            careers: ['Labour Law Expert', 'HR Consultant', 'Industrial Relations Specialist']
        },
        {
            id: 137,
            name: 'LLM in Constitutional Law',
            duration: '1-2 years',
            fees: '4-7 Lakhs',
            eligibility: 'LLB or equivalent',
            careers: ['Constitutional Lawyer', 'Public Law Expert', 'Judicial Officer']
        },
        {
            id: 138,
            name: 'LLM in Criminal Law',
            duration: '1-2 years',
            fees: '4-8 Lakhs',
            eligibility: 'LLB or equivalent',
            careers: ['Criminal Defense Lawyer', 'Public Prosecutor', 'Criminal Justice Expert']
        },
        {
            id: 139,
            name: 'LLB in Environmental Law',
            duration: '3 years',
            fees: '3-6 Lakhs',
            eligibility: 'Graduate in any stream',
            careers: ['Environmental Lawyer', 'Sustainability Consultant', 'Environmental Policy Expert']
        },
        {
            id: 140,
            name: 'LLB in Media & Entertainment Law',
            duration: '3 years',
            fees: '3-6 Lakhs',
            eligibility: 'Graduate in any stream',
            careers: ['Media Lawyer', 'Entertainment Law Consultant', 'Legal Advisor to Media Firms']
        },
        {
            id: 141,
            name: 'BA LLB in Legal Studies and Law',
            duration: '5 years',
            fees: '4-6 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Lawyer', 'Legal Advisor', 'Legal Journalist']
        }
    ],

    Design: [
        {
            id: 142,
            name: 'Bachelor of Design (B.Des)',
            duration: '4 years',
            fees: '6-10 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['UX Designer', 'Interior Designer', 'Fashion Designer']
        },
        {
            id: 143,
            name: 'Bachelor of Fine Arts (BFA)',
            duration: '3 years',
            fees: '3-6 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Fine Artist', 'Illustrator', 'Art Curator']
        },
        {
            id: 144,
            name: 'B.Sc Fashion Designing',
            duration: '3 years',
            fees: '5-9 Lakhs',
            eligibility: '10+2 with any stream',
            careers: ['Fashion Designer', 'Fashion Consultant', 'Textile Designer']
        },
        {
            id: 145,
            name: 'B.Des in Graphic Design',
            duration: '4 years',
            fees: '6-8 Lakhs',
            eligibility: '10+2 with any stream',
            careers: ['Graphic Designer', 'Visual Designer', 'Brand Designer']
        },
        {
            id: 146,
            name: 'BFA in Animation and Multimedia',
            duration: '3 years',
            fees: '4-7 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Animator', 'Video Game Designer', 'Multimedia Artist']
        },
        {
            id: 147,
            name: 'B.Des in Industrial Design',
            duration: '4 years',
            fees: '6-12 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Product Designer', 'Industrial Designer', 'Design Consultant']
        },
        {
            id: 148,
            name: 'M.Des (Master of Design)',
            duration: '2 years',
            fees: '7-15 Lakhs',
            eligibility: 'B.Des or equivalent',
            careers: ['Design Director', 'Creative Director', 'Design Consultant']
        },
        {
            id: 149,
            name: 'MFA in Applied Arts',
            duration: '2 years',
            fees: '4-8 Lakhs',
            eligibility: 'BFA or equivalent',
            careers: ['Art Director', 'Visual Arts Educator', 'Creative Entrepreneur']
        },
        {
            id: 150,
            name: 'M.Des in Communication Design',
            duration: '2 years',
            fees: '6-12 Lakhs',
            eligibility: 'B.Des or equivalent',
            careers: ['UX/UI Designer', 'Graphic Designer', 'Visual Communications Specialist']
        },
        {
            id: 151,
            name: 'MFA in Animation and Digital Arts',
            duration: '2 years',
            fees: '5-10 Lakhs',
            eligibility: 'BFA in Animation or equivalent',
            careers: ['3D Animator', 'VFX Artist', 'Digital Media Specialist']
        },
        {
            id: 152,
            name: 'B.Design in Communication Design',
            duration: '4 years',
            fees: '7-12 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Brand Designer', 'Visual Designer', 'UI/UX Designer']
        },
        {
            id: 153,
            name: 'Certificate in Interior Design',
            duration: '1 year',
            fees: '1-3 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Interior Designer', 'Space Planner', 'Architectural Visualizer']
        },
        {
            id: 154,
            name: 'Diploma in Graphic Designing',
            duration: '1 year',
            fees: '1-2 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Graphic Designer', 'Web Designer', 'Art Director']
        },
        {
            id: 155,
            name: 'Diploma in Animation',
            duration: '1 year',
            fees: '2-4 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Animator', 'VFX Specialist', '3D Artist']
        },
        {
            id: 156,
            name: 'Post Graduate Diploma in Fashion Designing',
            duration: '1 year',
            fees: '4-8 Lakhs',
            eligibility: 'Graduate in any stream',
            careers: ['Fashion Designer', 'Stylist', 'Textile Consultant']
        },
        {
            id: 157,
            name: 'Master of Arts in Design Studies',
            duration: '2 years',
            fees: '6-10 Lakhs',
            eligibility: 'Graduate in Design or equivalent',
            careers: ['Design Educator', 'Design Researcher', 'Design Consultant']
        },
        {
            id: 158,
            name: 'Post Graduate Diploma in Interior Design',
            duration: '1 year',
            fees: '3-7 Lakhs',
            eligibility: 'Graduate in any stream',
            careers: ['Interior Designer', 'Space Planner', 'Home Stager']
        },
        {
            id: 159,
            name: 'B.Des in Product Design',
            duration: '4 years',
            fees: '6-12 Lakhs',
            eligibility: '10+2 with any stream',
            careers: ['Product Designer', 'Industrial Designer', 'Furniture Designer']
        },
        {
            id: 160,
            name: 'Bachelor of Arts in Digital Media and Design',
            duration: '3 years',
            fees: '4-8 Lakhs',
            eligibility: '10+2 with any stream',
            careers: ['Digital Media Specialist', 'Graphic Designer', 'Web Designer']
        },
        {
            id: 161,
            name: 'B.Des in Textile Design',
            duration: '4 years',
            fees: '5-9 Lakhs',
            eligibility: '10+2 with any stream',
            careers: ['Textile Designer', 'Fashion Designer', 'Print Designer']
        },
        {
            id: 162,
            name: 'Master of Fine Arts in Graphic Design',
            duration: '2 years',
            fees: '5-10 Lakhs',
            eligibility: 'BFA or equivalent',
            careers: ['Senior Graphic Designer', 'Branding Expert', 'Visual Communications Manager']
        }
    ],


    Architecture: [
        {
            id: 163,
            name: 'B.Arch',
            duration: '5 years',
            fees: '8-15 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Architect', 'Urban Planner', 'Landscape Architect']
        },
        {
            id: 164,
            name: 'B.Tech in Architecture Engineering',
            duration: '4 years',
            fees: '7-12 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Architectural Engineer', 'Construction Manager', 'Building Consultant']
        },
        {
            id: 165,
            name: 'B.Des in Interior Architecture',
            duration: '4 years',
            fees: '6-10 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Interior Architect', 'Space Planner', 'Furniture Designer']
        },
        {
            id: 166,
            name: 'M.Arch',
            duration: '2 years',
            fees: '10-20 Lakhs',
            eligibility: 'B.Arch or equivalent',
            careers: ['Senior Architect', 'Urban Designer', 'Building Consultant']
        },
        {
            id: 167,
            name: 'M.Tech in Construction Management',
            duration: '2 years',
            fees: '8-15 Lakhs',
            eligibility: 'B.Tech in Civil Engineering or Architecture',
            careers: ['Project Manager', 'Construction Engineer', 'Structural Consultant']
        },
        {
            id: 168,
            name: 'Bachelors in Urban Design',
            duration: '3 years',
            fees: '5-8 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Urban Designer', 'City Planner', 'Sustainability Consultant']
        },
        {
            id: 169,
            name: 'Diploma in Architectural Design',
            duration: '1 year',
            fees: '2-4 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Architectural Assistant', 'Design Draftsman', 'Building Surveyor']
        },
        {
            id: 170,
            name: 'Post Graduate Diploma in Architecture Conservation',
            duration: '1 year',
            fees: '4-7 Lakhs',
            eligibility: 'B.Arch or equivalent',
            careers: ['Heritage Architect', 'Conservation Specialist', 'Restoration Consultant']
        },
        {
            id: 171,
            name: 'Master in Urban Planning',
            duration: '2 years',
            fees: '8-12 Lakhs',
            eligibility: 'B.Arch, B.Plan or equivalent',
            careers: ['Urban Planner', 'Sustainable Design Specialist', 'Infrastructure Consultant']
        },
        {
            id: 172,
            name: 'Bachelor of Planning (B.Plan)',
            duration: '4 years',
            fees: '5-10 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Urban Planner', 'City Designer', 'Real Estate Consultant']
        },
        {
            id: 173,
            name: 'M.Sc in Sustainable Architecture',
            duration: '2 years',
            fees: '6-12 Lakhs',
            eligibility: 'B.Arch or equivalent',
            careers: ['Sustainable Architect', 'Green Building Consultant', 'Energy Efficiency Expert']
        },
        {
            id: 174,
            name: 'Diploma in Building Construction Technology',
            duration: '1 year',
            fees: '2-4 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Construction Technologist', 'Building Engineer', 'Quality Control Inspector']
        },
        {
            id: 175,
            name: 'Certificate Course in Architectural Drafting',
            duration: '6 months',
            fees: '1-2 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Draftsman', 'Architectural Technologist', 'Building Designer']
        },
        {
            id: 176,
            name: 'M.Arch in Landscape Architecture',
            duration: '2 years',
            fees: '10-20 Lakhs',
            eligibility: 'B.Arch or equivalent',
            careers: ['Landscape Architect', 'Environmental Designer', 'Green Spaces Consultant']
        },
        {
            id: 177,
            name: 'B.Des in Architecture and Interior Design',
            duration: '4 years',
            fees: '6-10 Lakhs',
            eligibility: '10+2 in any stream',
            careers: ['Interior Designer', 'Architect', 'Urban Designer']
        },
        {
            id: 178,
            name: 'Master of Urban Design (MUD)',
            duration: '2 years',
            fees: '8-15 Lakhs',
            eligibility: 'B.Arch, B.Plan or equivalent',
            careers: ['Urban Designer', 'Urban Researcher', 'Architectural Planner']
        },
        {
            id: 179,
            name: 'M.Arch in Architectural History and Theory',
            duration: '2 years',
            fees: '8-15 Lakhs',
            eligibility: 'B.Arch or equivalent',
            careers: ['Architectural Historian', 'Cultural Heritage Expert', 'Urban Researcher']
        },
        {
            id: 180,
            name: 'B.Tech in Structural Engineering',
            duration: '4 years',
            fees: '6-10 Lakhs',
            eligibility: '10+2 with PCM',
            careers: ['Structural Engineer', 'Construction Manager', 'Civil Engineer']
        }
    ]

};



const CourseComparisonTable = ({ category, searchQuery }) => {
    const filteredCourses = courseData[category]?.filter(course =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) || []

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="overflow-x-auto"
        >
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-violet-500 text-black bg-green-200">
                    <tr>
                        <th className="px-6 py-3 text-left">Course Name</th>
                        <th className="px-6 py-3 text-left">Duration</th>
                        <th className="px-6 py-3 text-left">Fees</th>
                        <th className="px-6 py-3 text-left">Eligibility</th>
                        <th className="px-6 py-3 text-left">Career Prospects</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCourses.map((course) => (
                        <motion.tr
                            key={course.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            whileHover={{ backgroundColor: '#f3f4f6' }}
                            className="border-b"
                        >
                            <td className="px-6 py-4">{course.name}</td>
                            <td className="px-6 py-4">{course.duration}</td>
                            <td className="px-6 py-4">{course.fees}</td>
                            <td className="px-6 py-4">{course.eligibility}</td>
                            <td className="px-6 py-4">
                                <ul className="list-disc list-inside">
                                    {course.careers.map((career, index) => (
                                        <li key={index}>{career}</li>
                                    ))}
                                </ul>
                            </td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </motion.div>
    )
}

export default CourseComparisonTable