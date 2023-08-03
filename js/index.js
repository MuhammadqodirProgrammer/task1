const elForm = document.getElementById('form');
const elName = document.getElementById('name');
const elBirthdate = document.getElementById('birthdate');
const regionSelect = document.getElementById('region');
const districtSelect = document.getElementById('district');
const elMale = document.getElementById('male');
const elFemale = document.getElementById('female');
const elInterests = document.querySelectorAll('.interests');
const elGender = document.querySelectorAll('.gender');
// modal elements
const elOveylay = document.querySelector('.owerlay');
const editButton = document.querySelector('.modal_edit_btn');
const sendButton = document.querySelector('.modal_send_btn');
const elUserData = document.querySelector('.user_data');

// RENDER REGIONS
data.forEach((el) => {
	regionSelect.innerHTML += `<option value="${el?.region}" >${el?.region}</option>`;
});

// RENDER DISTRICTS
const renderData = (data, elList) => {
	districtSelect.innerHTML = `<option value="Tumanni tanlang" selected disabled >Tumanni tanlang</option>`;
	data.forEach((el) => elList.innerHTML += `<option value="${el}">${el}</option>`);
};

// WHEN REGION CHANGE
const handleSelectChange = () => {
	const selectedRegion = regionSelect.value;
	const districtsArr = data.find((el) => el.region == selectedRegion)?.districts;
	renderData(districtsArr, districtSelect);
};

// nodelistdan arrayga otkazib oshi uchun
const genderArr = Array.from(elGender);
const interestArr = Array.from(elInterests);

// Handle Submit
elForm.addEventListener('submit', (evt) => {
	evt.preventDefault();
	const userInterest = [];

	const userGender = genderArr.filter((el) => el.checked)[0]?.value;
	interestArr.filter((el) => (el.checked ? userInterest.push(el.value) : ''));

	// user malumotlarini tekshirib olish uchun
	elUserData.innerHTML = '';
	elOveylay.classList.add('active');
	elUserData.innerHTML += `
<p  class="user_data_pr" >Ismi-${elName?.value} </p>
<p class="user_data_pr" >Tugilgan kuni-${elBirthdate?.value} </p>
<p class="user_data_pr" >Viloyati-${regionSelect?.value}  </p>
<p class="user_data_pr" >Tumani-${districtSelect?.value}  </p>
<p class="user_data_pr" >Jinsi-${userGender}  </p>
<p class="user_data_pr" >Qiziqishlari-${userInterest.toString()}  </p>
`;
});

// Edit Button
editButton.addEventListener('click', () =>elOveylay.classList.remove('active'));

// Send Button
sendButton.addEventListener('click', () => {
	elOveylay.classList.remove('active');
	alert('Malumulotingiz muvafaqiyatli yuborildi yuborildi');
	location.reload();
});
