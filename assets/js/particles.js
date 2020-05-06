export default {
  data: {
    particles: {
      number: {
        value: 10,
        density: {
          enable: !0,
          value_area: 1e3
        }
      },
      color: {
        value: ['#ffffff', '#999999', '#666666', '#333333']
      },
      shape: {
        type: 'edge',
        stroke: {
          width: 0,
          color: '#000000'
        }
      },
      opacity: {
        value: 0.8,
        random: !0,
        anim: {
          enable: !1,
          speed: 0.5,
          opacity_min: 0.2,
          sync: !1
        }
      },
      size: {
        value: 28,
        random: !0,
        anim: {
          enable: !1,
          speed: 1,
          size_min: 10,
          sync: !1
        }
      },
      line_linked: {
        enable: !1
      },
      move: {
        enable: !0,
        speed: 2,
        direction: 'none',
        random: !0,
        straight: !1,
        out_mode: 'out',
        attract: {
          enable: !0,
          rotateX: 1e3,
          rotateY: 1e3
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: !1,
          mode: 'bubble'
        },
        onclick: {
          enable: !1,
          mode: 'push'
        },
        resize: !0
      },
      modes: {
        grab: {
          distance: 300,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 100,
          size: 7.5,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 1
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: !1
  }
}
