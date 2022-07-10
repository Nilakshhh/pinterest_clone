let imgBlob = null;
const work = document.querySelector(".add_pin");


document.querySelector("#create").addEventListener('click', () => {
    var element = document.getElementById("add_pin_container");
  element.classList.remove("hidden");
  work.style.pointerEvents = 'all'; 
  var element = document.getElementById("pin_container");
  element.classList.add("hidden");
});


document.querySelector("#upload_image").addEventListener('change', event => {
  if (event.target.files && event.target.files[0]) {
    if (/image\/*/.test(event.target.files[0].type)){
      const reader = new FileReader();
      reader.onload = () => {
        console.log("loaded");
        const img = new Image();
        img.src = reader.result;
        imgBlob = reader.result;
        img.onload = () => {
          console.log("doi");
          img.classList.add("pin_width");
          document.querySelector('.add_pin .pin_image').appendChild(img);
          document.querySelector('#upload_image_label').style.display = 'none';
          document.querySelector(".board .modals_pin").style.display = 'block';
        }
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }
document.querySelector("#upload_image").value = '';
})





document.querySelector(".save_pin").addEventListener('click', () => {
    var element = document.getElementById("add_pin_container");
  element.classList.add("hidden");
  var element = document.getElementById("pin_container");
  element.classList.remove("hidden");
  
  reset();
});





function reset(){
  const work = document.querySelector('.board .modals_pin');
  document.querySelector('#upload_image_label').style.display = 'block';
  imgBlob = '';
  work.style.display = 'none';
  if(work.children[0].children[0]) work.children[0].removeChild(work.children[0].children[0]);
  document.querySelector('#pin_title').value = '';
    document.querySelector('#pin_description').value = '';
    document.querySelector('#pin_destination').value = '';
    document.querySelector('#pin_size').value = ''; 
}