import biCover from '../assets/projects/bi-copilot/dashboard1.png';
import biDashboard1 from '../assets/projects/bi-copilot/dashboard1.png';
import biDashboard2 from '../assets/projects/bi-copilot/dashboard2.png';
import biDashboard3 from '../assets/projects/bi-copilot/dashboard3.png';
import biSystemArchitecture from '../assets/projects/bi-copilot/system-architecture.png';
import biWorkflow from '../assets/projects/bi-copilot/workflow.png';
import biFeatureIcons from '../assets/projects/bi-copilot/feature-icons.png';
import biTechnologyIcons from '../assets/projects/bi-copilot/technology-icons.png';

import trafficCover from '../assets/projects/traffic-analysis/dashboard1.png';
import trafficDashboard1 from '../assets/projects/traffic-analysis/dashboard1.png';
import trafficDashboard2 from '../assets/projects/traffic-analysis/dashboard2.png';
import trafficDashboard3 from '../assets/projects/traffic-analysis/dashboard3.png';
import trafficSystemArchitecture from '../assets/projects/traffic-analysis/system-architecture.png';
import trafficWorkflow from '../assets/projects/traffic-analysis/workflow.png';
import trafficFeatureIcons from '../assets/projects/traffic-analysis/feature-icons.png';
import trafficTechnologyIcons from '../assets/projects/traffic-analysis/technology-icons.png';

import jishnumlCover from '../assets/projects/jishnuml/dashboard1.png';
import jishnumlDashboard1 from '../assets/projects/jishnuml/dashboard1.png';
import jishnumlDashboard2 from '../assets/projects/jishnuml/dashboard2.png';
import jishnumlSystemArchitecture from '../assets/projects/jishnuml/system-architecture.png';
import jishnumlWorkflow from '../assets/projects/jishnuml/workflow.png';
import jishnumlFeatureIcons from '../assets/projects/jishnuml/feature-icons.png';
import jishnumlTechnologyIcons from '../assets/projects/jishnuml/technology-icons.png';

import resumeCover from '../assets/projects/resume-screening/dashboard1.png';
import resumeDashboard1 from '../assets/projects/resume-screening/dashboard1.png';
import resumeDashboard2 from '../assets/projects/resume-screening/dashboard2.png';
import resumeDashboard3 from '../assets/projects/resume-screening/dashboard3.png';
import resumeSystemArchitecture from '../assets/projects/resume-screening/system-architecture.png';
import resumeWorkflow from '../assets/projects/resume-screening/workflow.png';
import resumeFeatureIcons from '../assets/projects/resume-screening/feature-icons.png';
import resumeTechnologyIcons from '../assets/projects/resume-screening/technology-icons.png';

export type ProjectId =
  | 'bi-copilot'
  | 'traffic-analysis'
  | 'jishnuml'
  | 'resume-screening';

export interface FeaturedProject {
  id: ProjectId;
  title: string;
  subtitle: string;
  summary: string;
  coverImage: string;
  techBadges: string[];
  githubUrl: string;
  liveDemoUrl: string;
}

export interface ProjectDetail extends FeaturedProject {
  overview: string;
  problem: string;
  solution: string;
  systemArchitecture: string;
  workflow: string;
  dashboardImages: string[];
  technologyIcons: string;
  featureIcons: string;
  features: string[];
  results: string;
  challenges: string;
  futureImprovements: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'bi-copilot',
    title: 'Enterprise AI Business Intelligence & Decision Copilot',
    subtitle: 'Intelligent enterprise analytics for strategic business decisions.',
    summary:
      'A premium AI-driven BI copilot that blends financial modeling, forecasting, and executive reporting in a luxury analytics experience.',
    coverImage: biCover,
    techBadges: ['AI', 'BI', 'SQL', 'Power BI', 'Azure ML'],
    githubUrl: 'https://github.com/jishnucr/enterprise-ai-business-intelligence-copilot',
    liveDemoUrl: '#demo',
  },
  {
    id: 'traffic-analysis',
    title: 'Kochi City Traffic Analytics',
    subtitle: 'Smart urban traffic insights powered by computer vision and geospatial intelligence.',
    summary:
      'Delivering data-driven traffic optimization with congestion forecasting, route analysis, and visual dashboard intelligence.',
    coverImage: trafficCover,
    techBadges: ['Computer Vision', 'BI', 'IoT', 'Python', 'Power BI'],
    githubUrl: 'https://github.com/jishnucr',
    liveDemoUrl: '#demo',
  },
  {
    id: 'jishnuml',
    title: 'JishnuML AutoML Library',
    subtitle: 'A modern AutoML toolkit for rapid model development and deployment.',
    summary:
      'A software library built to accelerate predictive analytics with streamlined experimentation, automation, and production-ready ML pipelines.',
    coverImage: jishnumlCover,
    techBadges: ['AutoML', 'ML Ops', 'Python', 'Streamlit', 'Scikit-learn'],
    githubUrl: 'https://github.com/jishnucr',
    liveDemoUrl: '#demo',
  },
  {
    id: 'resume-screening',
    title: 'Resume Screening Application',
    subtitle: 'AI-powered candidate screening for smarter hiring decisions.',
    summary:
      'A recruitment analytics platform that automates resume parsing, candidate ranking, and interview readiness scoring using NLP.',
    coverImage: resumeCover,
    techBadges: ['NLP', 'AI', 'Python', 'FastAPI', 'SpaCy'],
    githubUrl: 'https://github.com/jishnucr',
    liveDemoUrl: '#demo',
  },
];

export const projectDetails: Record<ProjectId, ProjectDetail> = {
  'bi-copilot': {
    id: 'bi-copilot',
    title: 'Enterprise AI Business Intelligence & Decision Copilot',
    subtitle: 'Executive analytics, forecasting, and data-driven decision support.',
    summary:
      'A premium enterprise experience that combines AI-powered business intelligence, predictive forecasting, and executive-grade insights for strategic leaders.',
    coverImage: biCover,
    techBadges: ['AI', 'BI', 'SQL', 'Power BI', 'Azure ML'],
    githubUrl: 'https://github.com/jishnucr/enterprise-ai-business-intelligence-copilot',
    liveDemoUrl: '#demo',
    overview:
      'This solution elevates enterprise analytics with a unified BI copilot that translates data into action through advanced forecasting, KPI storytelling, and decision automation.',
    problem:
      'Executives lacked a single source of truth for cross-functional performance, with siloed dashboards and slow forecasting cycles undermining strategic planning.',
    solution:
      'Built a centralized decision support platform that combines curated analytics, AI narrative insights, and forecasting to accelerate confident business decisions.',
    systemArchitecture: biSystemArchitecture,
    workflow: biWorkflow,
    dashboardImages: [biDashboard1, biDashboard2, biDashboard3],
    technologyIcons: biTechnologyIcons,
    featureIcons: biFeatureIcons,
    features: [
      'AI Copilot insights',
      'Automated forecasting',
      'Customer segmentation',
      'Revenue performance analytics',
      'Profit and margin dashboards',
      'Contextual SQL recommendations',
      'Executive KPI storytelling',
      'Scenario modeling',
    ],
    results:
      'Implemented a premium analytics experience for leadership teams, accelerating decision cycles and improving forecast accuracy with a richer insight foundation.',
    challenges:
      'Balancing enterprise-grade security, data integration complexity, and interpretability for non-technical business stakeholders.',
    futureImprovements:
      'Next, extend the copilot with adaptive scenario planning, natural language executive briefings, and smarter anomaly detection.',
  },
  'traffic-analysis': {
    id: 'traffic-analysis',
    title: 'Kochi City Traffic Analytics',
    subtitle: 'Urban traffic intelligence powered by vision and geospatial analytics.',
    summary:
      'A city-scale traffic analytics system for identifying congestion patterns, optimizing routes, and enabling smarter urban planning decisions.',
    coverImage: trafficCover,
    techBadges: ['Computer Vision', 'BI', 'Geospatial', 'Python', 'Power BI'],
    githubUrl: 'https://github.com/jishnucr',
    liveDemoUrl: '#demo',
    overview:
      'This project combines sensor data, camera vision, and analytics dashboards to provide real-time city traffic intelligence for Kochi municipal operations.',
    problem:
      'Traffic managers lacked reliable analytics on congestion points and incident response effectiveness, delaying decision-making at scale.',
    solution:
      'Delivered an analytics platform with visual traffic heatmaps, congestion forecasts, and performance dashboards for route optimization and incident management.',
    systemArchitecture: trafficSystemArchitecture,
    workflow: trafficWorkflow,
    dashboardImages: [trafficDashboard1, trafficDashboard2, trafficDashboard3],
    technologyIcons: trafficTechnologyIcons,
    featureIcons: trafficFeatureIcons,
    features: [
      'Traffic anomaly detection',
      'Congestion forecasting',
      'Route performance tracking',
      'Incident analytics',
      'Visual city heatmaps',
      'Dashboard alerting',
      'Attendance for traffic assets',
      'Real-time KPI monitoring',
    ],
    results:
      'Enabled city planners to visualize traffic flow, reduce response times, and shape smarter road interventions with operational clarity.',
    challenges:
      'Integrating varied sensor feeds, ensuring data quality, and presenting complex geospatial insights in a clean executive view.',
    futureImprovements:
      'Planned enhancements include live vehicle tracking, adaptive signal optimization, and predictive incident prevention analytics.',
  },
  jishnuml: {
    id: 'jishnuml',
    title: 'JishnuML AutoML Library',
    subtitle: 'A modern AutoML platform for fast model building and deployment.',
    summary:
      'A polished AutoML library that streamlines predictive modeling, feature exploration, and production-ready deployment across analytics teams.',
    coverImage: jishnumlCover,
    techBadges: ['AutoML', 'ML Ops', 'Python', 'Streamlit', 'Scikit-learn'],
    githubUrl: 'https://github.com/jishnucr',
    liveDemoUrl: '#demo',
    overview:
      'Designed to accelerate model development, JishnuML automates experimentation, feature engineering, and model selection for enterprise analytics workflows.',
    problem:
      'Analysts spent too much time tuning models manually, delaying insights and reducing the speed of business decision-making.',
    solution:
      'Built an AutoML library that automates end-to-end modeling while preserving interpretability and deployment readiness for data teams.',
    systemArchitecture: jishnumlSystemArchitecture,
    workflow: jishnumlWorkflow,
    dashboardImages: [jishnumlDashboard1, jishnumlDashboard2],
    technologyIcons: jishnumlTechnologyIcons,
    featureIcons: jishnumlFeatureIcons,
    features: [
      'Automated model selection',
      'One-click deployment',
      'Data preprocessing pipes',
      'Model explainability',
      'Performance benchmarking',
      'Forecasting pipelines',
      'Experiment tracking',
      'Policy-ready outputs',
    ],
    results:
      'Reduced modeling lead time while improving model reliability and enabling more agile analytics product delivery.',
    challenges:
      'Keeping AutoML flexible enough for advanced use cases while remaining simple for business-facing analytics teams.',
    futureImprovements:
      'Future work includes advanced model tuning, ensemble support, and tighter integration with analyst collaboration tools.',
  },
  'resume-screening': {
    id: 'resume-screening',
    title: 'Resume Screening Application',
    subtitle: 'AI-driven candidate evaluation for fast, fair hiring.',
    summary:
      'A premium recruitment analytics product that parses candidate profiles, ranks resumes, and surfaces hiring-ready insights for talent teams.',
    coverImage: resumeCover,
    techBadges: ['NLP', 'AI', 'Python', 'FastAPI', 'SpaCy'],
    githubUrl: 'https://github.com/jishnucr',
    liveDemoUrl: '#demo',
    overview:
      'This application automates resume evaluation with NLP parsing, candidate scoring, and bias-aware analytics to help recruiters make faster talent decisions.',
    problem:
      'Hiring teams were overwhelmed by manual resume review and lacked a reliable way to compare candidates across skills, experience, and fit.',
    solution:
      'Created an intelligent screening platform that standardizes candidate evaluation, ranks profiles, and highlights opportunity fit for recruiters.',
    systemArchitecture: resumeSystemArchitecture,
    workflow: resumeWorkflow,
    dashboardImages: [resumeDashboard1, resumeDashboard2, resumeDashboard3],
    technologyIcons: resumeTechnologyIcons,
    featureIcons: resumeFeatureIcons,
    features: [
      'Resume parsing',
      'Candidate scoring',
      'Skill match analytics',
      'Interview readiness metrics',
      'Bias reduction signals',
      'Recruiter dashboard',
      'Profile comparison',
      'Automated shortlisting',
    ],
    results:
      'Delivered a more efficient hiring workflow with faster shortlist creation and better visibility into candidate strengths and risks.',
    challenges:
      'Ensuring NLP accuracy across diverse resume formats while maintaining fairness and recruiter trust.',
    futureImprovements:
      'Roadmap items include adaptive interview scoring, talent pipeline analytics, and stronger recruiter collaboration features.',
  },
};
