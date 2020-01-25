<template>
  <div class="projects-container">
    <div class="nav">
      <span>أعمالي</span>
    </div>
    <div class="list">
      <div v-for="project in projects" :key="project.id" v-on:click="goToUrl(project)" class="num">
        <div class="project-name">
          {{project.name}}
          <h6 class="text-secondary">{{project.desc}}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import tippy from "tippy.js";
import "tippy.js/themes/light.css";
export default {
  name: "ProjectsSection",
  data() {
    return {
      projects: [
        {
          name: "الموقع الشخصي",
          url: "https://github.com/MuhammedAlkhudiry/personal-site",
          desc: "هذا الموقع :)",
          tools: ["Bootstrap", "Vue.js", "Laravel (PHP)"]
        },
        {
          name: "خاصية بحث واستبدال في محرر النصوص الشهير Quill.js",
          url: "https://github.com/MuhammedAlkhudiry/quill-find-replace-module",
          desc:
            "مساهمة في تحسين محرر النصوص الشهير كويل بإنشاء خاصية بحث واستبدال",
          tools: ["JavaScript"]
        },
        {
          name: "مساهمة في موقع جامعة القصيم",
          url: "https://www.qu.edu.sa/",
          desc: "مساهمة في بناء مدونة لطلاب الجامعة",
          tools: ["Bootstrap", "Laravel (PHP)"]
        },
        {
          name: "محرر النصوص العربي الذكي (مشروع التخرج)",
          url: "https://github.com/MuhammedAlkhudiry/Arabic-Text-Smart-Editor",
          desc: "تطبيق يعين الكاتب العربي على تحسين لغته",
          tools: ["Electron.js"]
        }
      ]
    };
  },
  methods: {
    goToUrl(project) {
      window.open(project.url);
    }
  },
  mounted() {
    const projectsElements = this.$el.querySelectorAll(".num");

    this.projects.forEach((project, i) => {
      tippy(projectsElements[i], {
        content: project.tools.join(", "),
        arrow: false,
        placement: "bottom",
        showOnCreate: true,
        trigger: "sticky",
        hideOnClick: false,
        flip: false,
        theme: "light",
        distance: -50
      });
    });
  }
};
</script>

<style scoped>
.heading {
  color: #fff;
  text-align: center;
}

.projects-container {
  background-color: #f4f4f4;
  padding: 2rem;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
  margin: 3em auto;
  width: 80vw;
  max-width: 60em;
  border-radius: 0.25em;
}

@media only screen and (max-width: 768px) {
  .projects-container {
    width: 100%;
  }
}
.projects-container .nav {
  background-color: #fafafa;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 1rem;
  margin: 0 -3rem 2rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.nav span {
  font-size: 36px;
  padding: 0.2em;
}

.projects-container .list .num {
  padding: 0.5rem 2rem;
  padding-bottom: 3.5em;
  display: -webkit-box;
  -webkit-transition: 0.25s;
  transition: 0.35s;
  border: 1px #e0e0e0 solid;
  margin: 0.55em 0;
}

.projects-container .list .num .project-name {
  margin: auto 0;
  font-weight: bold;
}
.projects-container .list .num h6 {
  margin-top: 0.25em;
  margin-right: 2.7em;
}
.projects-container .list .num:nth-child(0):before {
  content: "0";
  font-size: 4rem;
  font-weight: bold;
  color: #000;
  width: 2rem;
  opacity: 0.01;
  -webkit-transition: 0.25s;
  transition: 0.25s;
}
.projects-container .list .num:nth-child(1):before {
  content: "1";
  font-size: 4rem;
  font-weight: bold;
  color: #000;
  width: 2rem;
  opacity: 0.01;
  -webkit-transition: 0.25s;
  transition: 0.25s;
}
.projects-container .list .num:nth-child(2):before {
  content: "2";
  font-size: 4rem;
  font-weight: bold;
  color: #000;
  width: 2rem;
  opacity: 0.01;
  -webkit-transition: 0.25s;
  transition: 0.25s;
}
.projects-container .list .num:nth-child(3):before {
  content: "3";
  font-size: 4rem;
  font-weight: bold;
  color: #000;
  width: 2rem;
  opacity: 0.01;
  -webkit-transition: 0.25s;
  transition: 0.25s;
}
.projects-container .list .num:nth-child(4):before {
  content: "4";
  font-size: 4rem;
  font-weight: bold;
  color: #000;
  width: 2rem;
  opacity: 0.01;
  -webkit-transition: 0.25s;
  transition: 0.25s;
}
.projects-container .list .num:nth-child(5):before {
  content: "5";
  font-size: 4rem;
  font-weight: bold;
  color: #000;
  width: 2rem;
  opacity: 0.01;
  -webkit-transition: 0.25s;
  transition: 0.25s;
}
.projects-container .list .num:nth-child(6):before {
  content: "6";
  font-size: 4rem;
  font-weight: bold;
  color: #000;
  width: 2rem;
  opacity: 0.01;
  -webkit-transition: 0.25s;
  transition: 0.25s;
}
.projects-container .list .num:nth-child(7):before {
  content: "7";
  font-size: 4rem;
  font-weight: bold;
  color: #000;
  width: 2rem;
  opacity: 0.01;
  -webkit-transition: 0.25s;
  transition: 0.25s;
}
.projects-container .list .num:nth-child(8):before {
  content: "8";
  font-size: 4rem;
  font-weight: bold;
  color: #000;
  width: 2rem;
  opacity: 0.01;
  -webkit-transition: 0.25s;
  transition: 0.25s;
}
.projects-container .list .num:nth-child(9):before {
  content: "9";
  font-size: 4rem;
  font-weight: bold;
  color: #000;
  width: 2rem;
  opacity: 0.01;
  -webkit-transition: 0.25s;
  transition: 0.25s;
}
.projects-container .list .num * {
  position: relative;
  left: 1.5rem;
  color: #3d3d3d;
  -webkit-transition: 0.25s;
  transition: 0.25s;
}

.projects-container .list .num:hover {
  background-color: #fafafa;
  cursor: pointer;
  border-radius: 0.75em;
}
.projects-container .list .num:hover:before {
  opacity: 0.2;
}
.projects-container .list .num:hover * {
  left: -1rem;
}
</style>
