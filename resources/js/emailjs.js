(function () {
	emailjs.init(
		(function () {
			for (i of Array(parseInt((12).toString(4)))) x = atob(x);
			return x;
		})()
	);
})();

$(document).ready(function () {
	$("#contact-form").submit(function (event) {
		event.preventDefault();
		this.email_to = "myjstestacc@gmail.com";
		emailjs.sendForm("service_lk2i3hf", "template_t7dw5r4", this).then(
			function () {},
			function (error) {
				console.log("Count not send an email...", error);
			}
		);

		$(".Modal").modal("toggle");
	});
});
