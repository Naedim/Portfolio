<template>
  <div class="home-page">
    <div class="home-page__introduction">
      <div class="home-page__introduction-first-line">
        <p>Hello, I'm</p>
      </div>

      <div class="home-page__introduction-second-line">
        <p>Damien NOEL</p>
      </div>

      <div class="home-page__introduction-third-line">

        <p class="home-page__mobile-text">
          I'm a <span>software engineer</span>, <span>freelance developer</span> working as an
          <span>IT teacher</span> in university.
        </p>

        <p class="home-page__text">
          <span>Software engineer</span> &&
          <span>IT teacher in university</span> &&
          <span>freelance developer</span>.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-page {
  flex-grow: 0.5;
  display : flex;

  align-items: center;

  .home-page__introduction {

    display: flex;
    flex-direction: column;

    .home-page__introduction-first-line {
      font-size: 3vh;
      color: $secondary;
      font-weight: 500;
    }

    .home-page__introduction-second-line {
      font-size: 5vh;
      color: $accent-2;
      font-weight: 600;
    }

    .home-page__introduction-third-line {
      margin-top: 20px;
      font-size: 3.5vh;
      color: $slate-5;
      font-weight: 500;

      .home-page__text {
        display: none;
      }

      span {
        color: $accent;
      }
    }
  }
}

@media screen and (min-width: 552px) {
  .home-page {

    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

    .home-page__introduction {
      .home-page__introduction-third-line {
        p {
          &.home-page__mobile-text {
            display: none;
          }

          &.home-page__text {
            display: block;
          }

        }
      }
    }
  }
}
</style>
