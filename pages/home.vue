<template>
  <div class="home-page-container">
    <div class="home-page-container__introduction">
      <div class="home-page-container__introduction--first-line">
        <p>Hello, I'm</p>
      </div>

      <div class="home-page-container__introduction--second-line">
        <p>Damien NOEL</p>
      </div>

      <div class="home-page-container__introduction--third-line">
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

.home-page-container {
  box-sizing: border-box;
  padding-left: 7%; 
  padding-right: 7%; 
  height : 100%;

  display :flex;
  align-items: center;

 


  .home-page-container__introduction {

    display: flex;
    flex-direction: column;
    // justify-content: center;
    .home-page-container__introduction--first-line {
      p {
        font-size : clamp(1.25rem, 3vw, 2.5rem);
        color: $secondary-color;
        font-weight: 500;
      }
    }

    .home-page-container__introduction--second-line {
      margin-top: -10px;
      p {
        font-size: clamp(2.5rem, 8vw, 7em);
        color: $third-color;
        font-weight: 600;
      }
    }

    .home-page-container__introduction--third-line {
      margin-top: 20px;
      p {
        font-size : clamp(1.5rem, 3vw, 2.5rem);
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
  .home-page-container {
    padding-right: 15%;
    padding-left: 15%;

    display : flex;
  justify-content: center;
  align-items: center;
  }

}
</style>
