const about = document.querySelector("#about");
const aboutContent = document.querySelector("#about-content");
const contact = document.querySelector("#contact");
const contactContent = document.querySelector("#contact-content");

about.addEventListener("click", () => {
	const aboutBox = new WinBox({
		title: "About",
		width: "400px",
		height: "300px",
		top: "50",
		right: "50",
		left: "50",
		bottom: "50",
		mount: aboutContent,
		onfocus: function () {
			this.setBackground("#00aa00");
		},
		onblur: function () {
			this.setBackground("#777");
		},
	});
});

contact.addEventListener("click", () => {
	const contactBox = new WinBox({
		title: "Contact",
		width: "400px",
		height: "300px",
		top: "100",
		right: "100",
		left: "150",
		bottom: "50",
		mount: contactContent,
		onfocus: function () {
			this.setBackground("#00aa00");
		},
		onblur: function () {
			this.setBackground("#777");
		},
	});
});
