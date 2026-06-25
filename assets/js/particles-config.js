particlesJS("particles-js", {
  particles: {
    number: {
      value: 180,
      density: {
        enable: true,
        value_area: 1000
      }
    },

    color: {
      value: "#6b6565"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 5,
      random: true,

      anim: {
        enable: true,
        speed: 0.3,
        opacity_min: 0.03,
        sync: false
      }
    },

    size: {
      value: 3.5,
      random: true,

      anim: {
        enable: true,
        speed: 1,
        size_min: 1,
        sync: false
      }
    },

    line_linked: {
      enable: false
    },

    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },

  interactivity: {
    detect_on: "canvas",

    events: {
      onhover: {
        enable: false
      },

      onclick: {
        enable: false
      },

      resize: true
    }
  },

  retina_detect: true
});