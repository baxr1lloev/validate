let form = document.forms.reg
let inputs = document.querySelectorAll('input')
let b = document.querySelector('button')
let span  = document.querySelector('span')
let label = document.querySelector('.lable')


let patterns = {
	name: /^[a-z ,.'-]+$/i,
	email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    age: /^[0-9]{0,2}$/,
    css:/^[a-z ,.'-]+$/i,
    html:/^[a-z ,.'-]+$/i,
    js:/^[a-z ,.'-]+$/i,
    about:/^[a-z ,.'-]+$/i
}

function validate(filed, val) {
	if(val.test(filed.value)) {
		filed.classList.add('valid')
        filed.parentElement.classList.add('v')
		filed.classList.remove('invalid')
        filed.parentElement.classList.remove('in')
        b.classList.remove('error')
        filed.innerHTML = ''
        filed.style.color = ''
	} else {
		filed.classList.add('invalid')
        filed.parentElement.classList.add('in')
		filed.classList.remove('valid')
        filed.parentElement.classList.remove('v')
    
	}
}
inputs.forEach(inp => {
	inp.onkeyup = () => {
        if(inp.name){
		validate(inp, patterns[inp.getAttribute('name')] )
	}}
})

form.onsubmit = (event) => {
	event.preventDefault()

	let arrCheck = []
 let arr = []
        let arr2 = []
        let arr3 = []
	inputs.forEach(inp => {
		if(inp.classList.value === 'invalid' || inp.value.length === 0 && inp.getAttribute('data-req') === '') {
            inp.innerHTML = 'заполните форму'
            inp.style.color = 'red'
            inp.classList.add('invalid')
			arrCheck.push(1)
            inp.parentElement.classList.add('in')
            inp.classList.remove('valid')
            inp.parentElement.classList.remove('v')
        
     
		}
       
        if (inp.classList.contains('invalid')) {
            arr += 1
        }
        if (inp.value.length > 0) {
            arr2 += 1
        }
        arr3 += 1

        span.innerHTML = `All:${arr3.length}  &nbsp;   Need:12  &nbsp;     Success: ${arr2.length}/12   &nbsp;   Error:${arr.length}/12 `
        
	})

 

	if(arrCheck.length === 0) {
		submit()
        b.classList.remove('error')
	} else {
        b.classList.add('error')
	}}


    
    function submit() {
        let user = {}
    
        let fm = new FormData(form)
    
        fm.forEach((value, key) => {
            user[key] = value
        })
    
        console.log(user);
    }
