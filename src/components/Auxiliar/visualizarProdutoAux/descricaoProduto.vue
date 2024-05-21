<template>
  
</template>

<script>
export default {
  mounted() {
    document.getElementById('box').style.height = '50vh';
    document.getElementById('box').addEventListener('click', function (e) {
      e.currentTarget.style.height = e.currentTarget.style.height === '50vh' ?
        e.currentTarget.style.height = '5.5vh' :
        e.currentTarget.style.height = '50vh';
    })
  }
}
</script>