<template>
  <div class="introduction-container">
    <div class="name">محمد الخضيري</div>
    <div id="description" class="description typewriter">
      <p>مطور برمجيات ويب</p>
    </div>
    <div class="my-projects-btn-container">
      <div class="btn my-project-btn" id="my-project-btn">
        <div class="my-project-note">أعمالي</div>
        <div class="arrow-down">
          <svg class="arrows">
            <polygon class="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 " />
            <polygon
              class="arrow-middle"
              points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
            />
            <polygon
              class="arrow-bottom"
              points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainSection"
};
</script>


<style scoped>
* {
  direction: rtl;
  text-align: center;
  outline: none;
}
.introduction-container {
  height: 100vh;
  direction: rtl;
  line-height: 1.5;
  padding: 10em 0;
  color: var(--light);
  opacity: 0.85;
}

.name {
  font-size: 72px;
  font-weight: bold;
}

.description {
  font-size: 36px;
  padding: 0.2em 2.5em 2.5em;
}
.my-project-note {
  margin: 1em;
}
.my-project-btn {
  transition: 0.3s ease-in-out;
  font-size: 24px;
  width: 25vw;
  height: 15vh;
  border-radius: 0;
  border-radius: 0.2em;
  color: var(--light);
  opacity: 0.85;
}

.my-project-btn:hover {
  font-size: 28px;
  transform: scale(1.1);
  transition: 0.2s ease-in-out;
}

.my-project-btn:hover polyline,
.my-project-btn:focus polyline {
  stroke-width: 6;
  transition: 0.3s ease-in-out;
}

.arrows {
  width: 75px;
  height: 65px;
}

.my-project-btn:hover polygon {
  fill: #fff;
  transition: all 0.2s ease-out;
}

.my-project-btn:hover polygon.arrow-bottom {
  -webkit-transform: translateY(-18px);
  transform: translateY(-18px);
}

.my-project-btn:hover polygon.arrow-top {
  -webkit-transform: translateY(18px);
  transform: translateY(18px);
}

.my-project-btn polygon {
  fill: #fff;
  transition: all 0.2s ease-out;
}

.my-project-btn polygon.arrow-middle {
  opacity: 0.75;
}

.my-project-btn polygon.arrow-top {
  opacity: 0.5;
}
.typewriter {
  width: fit-content;
  margin: 0 auto;
}
.typewriter p {
  width: fit-content;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-left: 0.15em solid var(--info); /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: var(--info);
  }
}
</style>
