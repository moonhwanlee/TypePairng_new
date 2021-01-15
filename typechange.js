const header_outputTag = document.querySelector("section.output h2");

const header_fontsizeTag = document.querySelector("div.option-header input[name='fontsize']");
const header_fontsizeOutput = document.querySelector("div.option-header span.fontsize-output");

const header_fontweightTag = document.querySelector("div.option-header input[name='fontweight']");
const header_fontweightOutput = document.querySelector("div.option-header span.fontweight-output");

const header_lineheightTag = document.querySelector("div.option-header input[name='lineheight']");
const header_lineheightOutput = document.querySelector("div.option-header span.lineheight-output");

const header_typefaceTag = document.querySelector("div.option-header select[name='typeface']");

header_typefaceTag.addEventListener("input", function(){
	header_outputTag.style.fontFamily = `${this.value}`;
})


header_fontsizeTag.addEventListener("input", function(){
	header_outputTag.style.fontSize = this.value +"px";	
	header_fontsizeOutput.innerHTML = this.value + "px";
})

header_fontweightTag.addEventListener("input", function(){
	header_outputTag.style.fontWeight = this.value;	
	header_fontweightOutput.innerHTML = this.value;
})

header_lineheightTag.addEventListener("input", function(){
	header_outputTag.style.lineHeight = this.value;	
	header_lineheightOutput.innerHTML = this.value;
})



const p_outputTag = document.querySelector("section.output p");

const p_fontsizeTag = document.querySelector("div.option-paragraph input[name='fontsize']");
const p_fontsizeOutput = document.querySelector("div.option-paragraph span.fontsize-output");

const p_fontweightTag = document.querySelector("div.option-paragraph input[name='fontweight']");
const p_fontweightOutput = document.querySelector("div.option-paragraph span.fontweight-output");

const p_lineheightTag = document.querySelector("div.option-paragraph input[name='lineheight']");
const p_lineheightOutput = document.querySelector("div.option-paragraph span.lineheight-output");

const p_typefaceTag = document.querySelector("div.option-paragraph select[name='typeface']");

p_fontsizeTag.addEventListener("input", function(){
	p_outputTag.style.fontSize = this.value +"px";	
	p_fontsizeOutput.innerHTML = this.value + "px";
})

p_fontweightTag.addEventListener("input", function(){
	p_outputTag.style.fontWeight = this.value;	
	p_fontweightOutput.innerHTML = this.value;
})

p_lineheightTag.addEventListener("input", function(){
	p_outputTag.style.lineHeight = this.value;	
	p_lineheightOutput.innerHTML = this.value;
})

p_typefaceTag.addEventListener("input", function(){
	p_outputTag.style.fontFamily = `${this.value}`;
})




