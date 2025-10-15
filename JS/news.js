        // Функционал фильтрации новостей
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const newsItems = document.querySelectorAll('.news-item');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Убираем активный класс со всех кнопок
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Добавляем активный класс нажатой кнопке
                    this.classList.add('active');
                    
                    const filter = this.getAttribute('data-filter');
                    
                    // Показываем/скрываем новости в зависимости от фильтра
                    newsItems.forEach(item => {
                        if (filter === 'all' || item.getAttribute('data-category') === filter) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
        });