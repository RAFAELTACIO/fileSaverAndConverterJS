const textarea = document.querySelector("textarea"),
fileNameInput = document.querySelector(".file-name input"),
selectMenu = document.querySelector(".save-as select"),
saveBtn = document.querySelector(".save-btn");

selectMenu.addEventListener("change", () => {
    // 
    let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerText = `Save As ${selectedOption.split(" ")[0]} File`
})

saveBtn.addEventListener("click", () => {
    const blob = new Blob([textarea.value], {type: selectMenu.value});
    // CRIA UMA URL QUE REPRESENTA UM OBJETO QUE FOI PASSADO
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a")//CRIANDO UMA TAG <a>
    link.download = fileNameInput.value;
    link.href = fileUrl;//PASSANDO O FILE URL COM O HREF SENDO O LINK
    link.click();//CLICANDO O LINK PARA FAZER O DOWNLOAD DO ARQUIVO
})