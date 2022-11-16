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
  padding-right: 8vw;
  padding-left: 8vw;

  .center-container__introduction {
    // background-color: red;

    display: flex;
    flex-direction: column;
    .center-container__introduction--first-line {
      p {
        font-size: clamp(1.25rem, 3.7vw, 4rem);
        color: $secondary-color;
        font-weight: 500;
      }
    }

    .center-container__introduction--second-line {
      margin-top: -10px;
      p {
        font-size: clamp(2.5rem, 8vw, 10em);
        color: $third-color;
        font-weight: 600;
      }
    }

    .center-container__introduction--third-line {
      margin-top: clamp(15px, 20px, 40px);
      width: clamp(100%, 80%, 60%);
      p {
        font-size: clamp(1.5rem, 4.5vw, 5.5rem);
        color: $fourth-color;
        font-weight: 500;
        span {
          color: $third-color;
        }
      }
    }
  }
}
</style>
