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
  
  const pinData ={
    author: "Nilaksh",
    title: document.querySelector('#pin_title').value,
    description: document.querySelector('#pin_description').value,
    destination: document.querySelector('#pin_destination').value,
    pinSize: document.querySelector('#pin_size').value,
    img_blob: imgBlob
  }
  pinCreate(pinData);
  reset();
});


function pinCreate(data){
  const new_pin = document.createElement("div");
  const img = new Image();
  img.src = data.img_blob;
  img.onload = () => {
    new_pin.classList.add('card');
    new_pin.classList.add(`card-${data.pinSize}`);
    img.classList.add('pin_width');

    new_pin.innerHTML = `
    
    <div class="model">
      <div class="head-pin"><div class="pin-title">${data.title}</div></div>
      <div class="foot-pin">
          <div class="pin-link">${data.destination}</div>
      </div>
    </div>
    <div class="pin_image"></div>
    `;





    document.querySelector('.pin_container').appendChild(new_pin);
    new_pin.children[1].appendChild(img);
  }

}


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