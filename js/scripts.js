
document.getElementById('myButton').onclick = myFunction;

function myFunction() {
  alert('Вы успешно записались!');
}

document.addEventListener('DOMContentLoaded', () => {
    const mainBookingButton = document.getElementById('mainBookingButton');
    const timeSelectionMenu = document.getElementById('timeSelectionMenu');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const confirmationText = document.getElementById('confirmationText');
    const timeSlotButtons = document.querySelectorAll('.time-slot-button');
    const resetButton = document.getElementById('resetButton');

    // Функция для сброса состояния к начальному
    function resetBooking() {
        mainBookingButton.classList.remove('hidden');
        timeSelectionMenu.classList.add('hidden');
        confirmationMessage.classList.add('hidden');
        resetButton.classList.add('hidden'); // Скрываем кнопку "Записаться еще раз"
    }

    // Изначально скрываем все, кроме основной кнопки
    resetBooking(); // Вызываем при загрузке, чтобы все было в начальном состоянии

    // Обработчик для основной кнопки "Нажмите, чтобы записаться"
    mainBookingButton.addEventListener('click', () => {
        mainBookingButton.classList.add('hidden'); // Скрываем основную кнопку
        timeSelectionMenu.classList.remove('hidden'); // Показываем меню выбора времени
    });

    // Обработчик для кнопок выбора времени
    timeSlotButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedTime = button.dataset.time; // Получаем значение из data-time атрибута

            timeSelectionMenu.classList.add('hidden'); // Скрываем меню выбора времени
            confirmationText.textContent = `Вы успешно записались на ${selectedTime}! 🎉`; // Обновляем текст подтверждения
            confirmationMessage.classList.remove('hidden'); // Показываем сообщение об успешной записи
            resetButton.classList.remove('hidden'); // Показываем кнопку "Записаться еще раз"

            // Здесь в реальном приложении можно было бы отправить данные на сервер
            console.log(`Пользователь записался на: ${selectedTime}`);
        });
    });

    // Обработчик для кнопки "Записаться еще раз"
    resetButton.addEventListener('click', () => {
        resetBooking();
    });
});




 document.addEventListener('DOMContentLoaded', () => {
            const contactForm = document.getElementById('contactForm');
            const successMessage = document.getElementById('successMessage');

            contactForm.addEventListener('submit', (event) => {
                event.preventDefault(); // Предотвращаем стандартную отправку формы и перезагрузку страницы

                // Здесь вы могли бы собрать данные формы и отправить их на сервер
                // Например:
                const formData = {
                    name: document.getElementById('clientName').value,
                    phone: document.getElementById('clientPhone').value,
                    email: document.getElementById('clientEmail').value,
                    message: document.getElementById('clientMessage').value
                };

                console.log('Отправленные данные:', formData);

                // В реальном проекте здесь был бы fetch() или XMLHttpRequest для отправки данных на сервер
                // fetch('/api/send-message', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify(formData),
                // })
                // .then(response => response.json())
                // .then(data => {
                //     console.log('Успех:', data);
                //     contactForm.style.display = 'none'; // Скрываем форму
                //     successMessage.style.display = 'block'; // Показываем сообщение об успехе
                //     // Опционально: через несколько секунд скрыть сообщение и показать форму снова
                //     setTimeout(() => {
                //         successMessage.style.display = 'none';
                //         contactForm.style.display = 'block';
                //         contactForm.reset(); // Очищаем форму
                //     }, 5000); // Сообщение исчезнет через 5 секунд
                // })
                // .catch((error) => {
                //     console.error('Ошибка:', error);
                //     alert('Произошла ошибка при отправке сообщения. Попробуйте еще раз.');
                // });


                // Для демонстрации: скрываем форму и показываем сообщение об успехе сразу
                contactForm.style.display = 'none'; // Скрываем форму
                successMessage.style.display = 'block'; // Показываем сообщение об успехе

                // Через 5 секунд скрываем сообщение и показываем форму снова, очистив ее
                setTimeout(() => {
                    successMessage.style.display = 'none';
                    contactForm.style.display = 'block';
                    contactForm.reset(); // Очищаем все поля формы
                }, 5000); // Сообщение исчезнет через 5 секунд (5000 миллисекунд)
            });
        });



