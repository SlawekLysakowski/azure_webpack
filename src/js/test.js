import img1 from "../images/car.webp";

export function test(text= 'Jan Kowalski') {
document.body.innerHTML = `<h1>${text}</h1>`;

    const img = new Image();
    img.src = img1;
    document.body.append(img);
}



