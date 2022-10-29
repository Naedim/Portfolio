<template>
  <div>
    <div class="introduction">
      <div class="introduction__first-line">
        <span>Hello, I'm</span>
      </div>

      <div class="introduction__second-line">
        <span>Damien NOEL</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$primary-color: #d81264;
$third-color: #ccd6f6;
.introduction {
  margin-left: 30px;
  width: 100vw;
  // background-color: red;

  display: flex;
  flex-direction: column;
  gap: 10px;

  .introduction__first-line {
    span {
      font-size: 1.25rem;
      color: $primary-color;
      font-weight: 500;
    }
  }

  .introduction__second-line {
    span {
      font-size: 2.5rem;
      color: $third-color;
      font-weight: 500;
    }
  }
}

.menu-hamburger {
  font-size: 2rem;
}
</style>
