// console.log( "Hello World")

// var images = document.getElementsByTagName("img")
// console.log(images)

// var anchors = document.getElementsByTagName("a")
// console.log(anchors)

// var paragraphs = document.getElementsByTagName("p")
// console.log(paragraphs)

// var main_content = document.getElementById(main-content)

// var new_heading = document.createElement("h1")

// var new_phrase = document.createElement('p')

// new_heading.innerHTML = 'welcome to my page!'

// new_phrase.innerHTML = "This is me trying to show workings"

// main_content.appendChild(new_heading)
// main_content.appendChild(new_phrase)

// var btn = document.getElementById('myBtn')
// btn.onclick = function(){
//     alert("welcome to my page assholes!")
//     alert("Get out of my page Assholess!")
// };

// function runme(){
//     alert("hey there")
// }
// setTimeout( runme, 2000)

// function runme(){
//     alert('I don Land!!')
// }
// setInterval(runme, 2000 )

var u_name = document.myForm.u_name;
var message = document.getElementById("message")



function sharp(){
    if(u_name.value.length < 3 )
    {
        message.innerHTML = "let the characters be more"
        message.style.color =  'red'
        u_name.style.backgroundColor = 'red'
        u_name.style.color = 'white'
    }else if( u_name.value.length == 5)
    {
        message.innerHTML = 'Good'
        message.style.color = "green"
        u_name.style.backgroundColor = 'green'
        u_name.style.color = 'pink'


    }else if( u_name.value.length > 8)
        {
            message.innerHTML = 'limit has been reached'
            message.style.color = "yellow"
            u_name.style.backgroundColor = 'orange'
            u_name.style.color = 'brown'
        }
    
}
