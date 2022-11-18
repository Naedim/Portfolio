<template>
  <div class="center-container">
    <div class="center-container__introduction">
      <div class="center-container__introduction--first-line">
        <p>Hello, I'm</p>
      </div>

      <div class="center-container__introduction--second-line">
        <p>Damien NOEL</p>
      </div>

      <div class="center-container__introduction--third-line">
        <p>
          I'm a <span>software engineer</span> working as an
          <span>IT teacher</span> in university and a
          <span>freelance developer</span>.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$secondary-color: #d81264;
$third-color: #ccd6f6;
$fourth-color: #6b7dad;

.center-container {
  padding-right: 30px;
  padding-left: 30px;

  .center-container__introduction {
    // background-color: red;

    display: flex;
    flex-direction: column;
    .center-container__introduction--first-line {
      p {
        font-size : clamp(1.25rem, 3vw, 3rem);
        color: $secondary-color;
        font-weight: 500;
      }
    }

    .center-container__introduction--second-line {
      margin-top: -10px;
      p {
        font-size: clamp(2.5rem, 8vw, 6rem);
        color: $third-color;
        font-weight: 600;
      }
    }

    .center-container__introduction--third-line {
      margin-top: 20px;
      // max-width: 500px;
      p {
        font-size : clamp(1.5rem, 3vw, 3rem);
        color: $fourth-color;
        font-weight: 500;
        span {
          color: $third-color;
        }
      }
    }
  }
}

@media screen and (min-width: 480px) {
  .center-container {
    padding-right: 15%;
    padding-left: 15%;
  }

}
</style>
