
var image = document.getElementById('image');

image.addEventListener('mouseover', function(){
    image.src = 'https://media.istockphoto.com/id/1440057213/photo/three-cows-black-and-white-group-together-in-a-field-happy-and-joyful-and-a-blue-sky-a-wide.jpg?s=1024x1024&w=is&k=20&c=kL-O524mGSULG-aNy-gsEXBTOM7QYxm1T2v72ZEIz1s=';
});

image.addEventListener('mouseout', function(){
    image.src = 'https://media.istockphoto.com/id/1303666715/photo/we-herd-you-were-looking-for-some-magnificent-cattle.jpg?s=612x612&w=is&k=20&c=dCsQduBKx72ipMeYAoQXnvKU4cy6LTdVWl0TVyWHvis=';
});