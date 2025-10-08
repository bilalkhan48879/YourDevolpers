   //                          For Slider                //
   
   let index = 0;
    const slides = document.getElementById("slides");
    const total = slides.children.length;

    function showSlide() {
      slides.style.transform = `translateX(${-index * 400}px)`;
    }

    function nextSlide() {
      index = (index + 1) % total;
      showSlide();
    }

    function prevSlide() {
      index = (index - 1 + total) % total;
      showSlide();
    }

    let newIndex = 0;
    const Slides = document.getElementById("slides2");
    const Total = Slides.children.length;

    function showSlide2() {
      Slides.style.transform = `translateX(${-newIndex * 400}px)`;
    }

    function nextSlide2() {
      newIndex = (newIndex + 1) % Total;
      showSlide2();
    }

    function prevSlide2() {
      newIndex = (newIndex - 1 + Total) % Total;
      showSlide2();
    }

//                                               For Pannels                             //
let CatchHCJ = document.querySelector("#HCJ");
let CatchBEL = document.querySelector("#BEL");
let CatchOL = document.querySelector("#OL");
let CatchWD = document.querySelector("#WD");

let CatchAllButtons = document.querySelectorAll("#taskButtons");
let CatchWebButtons = document.querySelectorAll(".btn");

                                         //WEB Related//
                                              //HTML
CatchAllButtons[0].addEventListener("mouseover", (evt) =>
{
    CatchHCJ.innerHTML = "Only HTML language will be used.Each page will be charged separately. If you want to customize it, Please leave a message in the form.";
    return evt;
});
CatchAllButtons[0].addEventListener("mouseleave", (evt) =>
{
   CatchHCJ.innerHTML = "HTML, CSS, JS Project";
    return evt;
});
                                               //CSS
CatchAllButtons[1].addEventListener("mouseover", (evt) =>
{
    CatchHCJ.innerHTML = "Only CSS language will be used.Each page will be charged separately. If you want to customize it, Please leave a message in the form.";
    return evt;
});
CatchAllButtons[1].addEventListener("mouseleave", (evt) =>
{
   CatchHCJ.innerHTML = "HTML, CSS, JS Project";
    return evt;
});
                                        //JavaScript
CatchAllButtons[2].addEventListener("mouseover", (evt) =>
{
    CatchHCJ.innerHTML = "Only JavaScript language will be used.Each page will be charged separately. If you want to customize it, Please leave a message in the form.";
    return evt;
});
CatchAllButtons[2].addEventListener("mouseleave", (evt) =>
{
   CatchHCJ.innerHTML = "HTML, CSS, JS Project";
    return evt;
});
                                         //HTML, CSS, JavaScript
CatchAllButtons[3].addEventListener("mouseover", (evt) =>
{
    CatchHCJ.innerHTML = "All languages ​​will be written on one page. Each page will be charged separately. If you want to customize it, Please leave a message in the form.";
    return evt;
});
CatchAllButtons[3].addEventListener("mouseleave", (evt) =>
{
   CatchHCJ.innerHTML = "HTML, CSS, JS Project";
    return evt;
});

                                            //BackEnd Related//
                                            //PHP
CatchAllButtons[4].addEventListener("mouseover", (evt) =>
{
    CatchBEL.innerHTML = "Only PHP language will be used. Each page will be charged separately. If you want to customize it, Please leave a message in the form.";
    return evt;
});
CatchAllButtons[4].addEventListener("mouseleave", (evt) =>
{
   CatchBEL.innerHTML = "Back-End Programming Languages";
    return evt;
});
                                             //Python With Frameworks
CatchAllButtons[5].addEventListener("mouseover", (evt) =>
{
    CatchBEL.innerHTML = "Python language will be used for Web Pages also used Python Web Frameworks if need. Each page will be charged separately. If you want to customize it, Please leave a message in the form.";
    return evt;
});
CatchAllButtons[5].addEventListener("mouseleave", (evt) =>
{
   CatchBEL.innerHTML = "Back-End Programming Languages";
    return evt;
});

                                        //Other Projects//
                                        //Python
CatchAllButtons[6].addEventListener("mouseover", (evt) =>
    {
        CatchOL.innerHTML = "Python language will be used for projects.Please leave a message in the form also explain about your project.";
    return evt;
});
CatchAllButtons[6].addEventListener("mouseleave", (evt) =>
{
    CatchOL.innerHTML = "Other Languages Project";
    return evt;
});
                                            //C or C++
CatchAllButtons[7].addEventListener("mouseover", (evt) =>
    {
        CatchOL.innerHTML = "Only one language will be used from both for projects.Please leave a message in the form about your project.";
    return evt;
});
CatchAllButtons[7].addEventListener("mouseleave", (evt) =>
{
   CatchOL.innerHTML = "Other Languages Project";
    return evt;
});

                                         //WEB Devolopment//
                                         //Full Stack
CatchWebButtons[0].addEventListener("mouseover", (evt) =>
{
    CatchWD.style.fontSize = "15px";
    CatchWD.innerHTML = "We provide complete full-stack web development, handling both frontend and backend to deliver a fully functional website or web application. Each project is priced individually. For custom requirements or special features, Please leave a message in the project form.";
    return evt;
});
CatchWebButtons[0].addEventListener("mouseleave", (evt) =>
{
   CatchWD.innerHTML = "Web Devolopment Projects";
    return evt;
});
                                           //Front End
CatchWebButtons[1].addEventListener("mouseover", (evt) =>
{
    CatchWD.style.fontSize = "15px";
    CatchWD.innerHTML = "We specialize in front-end web development, creating responsive, interactive, and visually appealing web pages. Each page is charged separately. If you want custom designs or features, Please leave a message in the project form.";
    return evt;
});
CatchWebButtons[1].addEventListener("mouseleave", (evt) =>
{
   CatchWD.innerHTML = "Web Devolopment Projects";
    return evt;
});
                                           //Back End
CatchWebButtons[2].addEventListener("mouseover", (evt) =>
{
    CatchWD.style.fontSize = "15px";
    CatchWD.innerHTML = "We provide back-end web development, building secure, efficient, and scalable server-side solutions for your web applications. Each module or page is charged separately. For custom functionality or features, please leave a message in the project from.";
    return evt;
});
CatchWebButtons[2].addEventListener("mouseleave", (evt) =>
{
   CatchWD.innerHTML = "Web Devolopment Projects";
    return evt;
});


