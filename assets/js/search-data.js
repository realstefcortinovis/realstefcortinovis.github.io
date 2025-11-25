// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Please refer to Google Scholar for the most up-to-date list of my publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Publications/";
          },
        },{id: "news-i-started-my-dphil-at-the-university-of-oxford",
          title: 'I started my DPhil at the University of Oxford.',
          description: "",
          section: "News",},{id: "news-our-paper-inverse-free-sparse-variational-gaussian-processes-was-accepted-at-neurips-2024-workshop-on-bayesian-decision-making-and-uncertainty",
          title: 'Our paper Inverse-Free Sparse Variational Gaussian Processes was accepted at NeurIPS 2024 Workshop...',
          description: "",
          section: "News",},{id: "news-our-preprint-bayes-assisted-confidence-regions-focal-point-estimator-and-bounded-influence-priors-is-now-online",
          title: 'Our preprint Bayes-assisted Confidence Regions: Focal Point Estimator and Bounded-influence Priors is now...',
          description: "",
          section: "News",},{id: "news-our-paper-fab-ppi-frequentist-assisted-by-bayes-prediction-powered-inference-was-accepted-at-icml-2025",
          title: 'Our paper FAB-PPI: Frequentist, Assisted by Bayes, Prediction-Powered Inference was accepted at ICML...',
          description: "",
          section: "News",},{id: "news-our-preprint-confidence-sequences-with-informative-bounded-influence-priors-is-now-online",
          title: 'Our preprint Confidence sequences with informative, bounded-influence priors is now online!',
          description: "",
          section: "News",},{id: "news-our-paper-anytime-valid-bayes-assisted-prediction-powered-inference-was-accepted-at-neurips-2025",
          title: 'Our paper Anytime-valid, Bayes-assisted, Prediction-Powered Inference was accepted at NeurIPS 2025.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%6F%72%74%69%6E%6F%76%69%73@%73%74%61%74%73.%6F%78.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/stefanocortinovis", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/stefano-cortinovis", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=2pcHzpgAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
