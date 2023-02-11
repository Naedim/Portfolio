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
  box-sizing: border-box;
  padding-left: 7%;
  padding-right: 7%;
  height: 100%;

  display: flex;

  .home-page__introduction {
    padding-top: 25%;
    
    display: flex;
    flex-direction: column;
    padding-top: 25%;

    .home-page__introduction-first-line {
      p {
        font-size: clamp(1.25rem, 4vw, 2.5rem);
        color: $primary;
        font-weight: 500;
      }
    }

    .home-page__introduction-second-line {
      margin-top: -10px;

      p {
        font-size: clamp(2.5rem, 8vw, 7em);
        color: $slate-2;
        font-weight: 600;
      }
    }

    .home-page__introduction-third-line {
      margin-top: 20px;

      p {
        font-size: clamp(1.5rem, 3vw, 2.5rem);
        color: $accent;
        font-weight: 500;

        &.home-page__text {
          display: none;
        }

        span {
          color: $slate-2;
        }
      }
    }
  }
}

@media screen and (min-width: 552px) {
  .home-page {
    padding-right: 15%;
    padding-left: 15%;

    display: flex;
    justify-content: center;
    // align-items: center;

    .home-page__introduction {
      padding-top: 15%;

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
