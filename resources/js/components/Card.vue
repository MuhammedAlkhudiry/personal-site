<template>
  <div class="card">
    <div class="card__image-container">
      <img class="card__image" src="https://picsum.photos/400/300" alt />
    </div>

    <svg class="card__svg" viewBox="0 0 800 500">
      <path
        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
        stroke="transparent"
        fill="#333"
      />
      <path
        class="card__line"
        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
        stroke="pink"
        stroke-width="3"
        fill="transparent"
      />
    </svg>

    <div class="card__content">
      <h1 class="card__title">Lorem ipsum</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor praesentium at quod autem omnis, amet eaque unde perspiciatis adipisci possimus quam facere illo et quisquam quia earum nesciunt porro.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      imgUrl: ""
    };
  },
  beforeMount() {
    // unsplash.search
    //   .photos("code")
    //   .then(toJson => axios.get(toJson.url))
    //   .then(json => {
    //     console.log(json);
    //   });
  }
};
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}

.card {
  position: relative;
  background: #333;
  border-radius: 6px;
  padding: 2rem;
  color: #aaa;
  overflow: hidden;
  margin: 3em;

  &__image-container {
    margin: -2rem -2rem 1rem -2rem;
  }

  &__line {
    opacity: 0;
    animation: LineFadeIn 0.8s 0.8s forwards ease-in;
  }

  &__image {
    opacity: 0;
    animation: ImageFadeIn 0.8s 1.4s forwards;
    background: url(/img/harmony-relax-rock-moqui-161702.jpeg) no-repeat center
      center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  &__title {
    color: white;
    margin-top: 0;
    font-weight: 800;
    letter-spacing: 0.01em;
  }

  &__content {
    opacity: 0;
    animation: ContentFadeIn 0.8s 1.6s forwards;
  }

  &__svg {
    position: absolute;
    left: 0;
    top: 80px;
  }
}

@keyframes LineFadeIn {
  0% {
    opacity: 0;
    d: path(
      "M 0 300 Q 0 300 0 300 Q 0 300 0 300 C 0 300 0 300 0 300 Q 0 300 0 300 "
    );
    stroke: #fff;
  }
  50% {
    opacity: 1;
    d: path(
      "M 0 300 Q 50 300 100 300 Q 250 300 350 300 C 350 300 500 300 650 300 Q 750 300 800 300"
    );
    stroke: var(--primary);
  }
  100% {
    opacity: 1;
    d: path(
      "M -2 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 802 400"
    );
    stroke: var(--primary);
  }
}

@keyframes ContentFadeIn {
  0% {
    transform: translateY(-1rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes ImageFadeIn {
  0% {
    transform: translate(-0.5rem, -0.5rem) scale(1.05);
    opacity: 0;
    filter: blur(2px);
  }
  50% {
    opacity: 1;
    filter: blur(2px);
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
    filter: blur(0);
  }
}
</style>
