if(document/readyState || document.body.readyState=='complete')
window.onload=function(){
function handleFormSubmit(event) {
    // Просим форму не отправлять данные самостоятельно
    event.preventDefault()
    console.log('Отправка!')
  };
  
  const applicantForm = document.getElementById('forma')
  applicantForm.addEventListener('submit', handleFormSubmit)


  function serializeForm(formNode) {
    console.log(formNode.elements)

  Array.from(elements)
  .forEach((element) => {
    const { name, value } = element
    console.log({ name, value })
  })
};

function serializeForm(formNode) {
    const { elements } = formNode
    const data = Array.from(elements)
      .filter((item) => !!item.name)
      .map((element) => {
        const { name, value } = element
  
        return { name, value }
      })
  
    console.log(data)
  };
  const isOn = someCheckboxInput.checked
}