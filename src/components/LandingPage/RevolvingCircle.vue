<template>
  <div class="body">
    <div class="loader">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
export default {
name: "RevolvingCircle"
}
</script>

<style scoped>
.body{
  top: 0;
  z-index: 101;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.loader{
  height: 50px;
  transform-origin: bottom center ;
  animation: rotate 5s linear infinite;
}
.circle{
  display: inline-block;
  background-color: #2660A4;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transform: scale(0.5);
  animation: grow 1.5s linear infinite;
  margin: -10px;
}
.circle:nth-child(2){
  background-color: #F19953;
  animation-delay: 0.75s;
  transform: scale(0.3);
}
.circle:nth-child(3){
  background-color:  #EDF7F6;
  animation-delay: 0.25s;
  transform: scale(0.1);
}
@keyframes rotate {
  to{
    transform: rotate(360deg);
  }
}
@keyframes grow {
  20%{
    transform: scale(0.1);
  }
  60%{
    transform: scale(0.5);
  }

}

</style>