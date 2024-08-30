// 지도와 마커 설정
var map = L.map('map').setView([36.5, 127.5], 7);

// CartoDB Positron 타일 레이어 추가 (회색 지도)
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// 마커 아이콘 설정 및 초기 마커 추가
const markers = [
    L.marker([37.5665, 126.9780], { icon: L.divIcon({ className: 'circle-icon', iconSize: [30, 30] }) }),  // 서울 (10 증가)
    L.marker([36.4800, 127.2890], { icon: L.divIcon({ className: 'circle-icon', iconSize: [35, 35] }) }),  // 세종 (10 증가)
    L.marker([35.1595, 126.8526], { icon: L.divIcon({ className: 'circle-icon', iconSize: [40, 40] }) }),  // 광주 (10 증가)
    L.marker([35.5394, 129.3114], { icon: L.divIcon({ className: 'circle-icon', iconSize: [40, 40] }) }),  // 울산 (10 증가)
    L.marker([35.1796, 129.0756], { icon: L.divIcon({ className: 'circle-icon', iconSize: [40, 40] }) }),  // 부산 (10 증가)
    L.marker([35.8714, 128.6014], { icon: L.divIcon({ className: 'circle-icon', iconSize: [40, 40] }) }),  // 대구 (10 증가)
    L.marker([33.4996, 126.5312], { icon: L.divIcon({ className: 'circle-icon', iconSize: [40, 40] }) }),  // 제주 (10 증가)
    L.marker([37.4563, 126.7052], { icon: L.divIcon({ className: 'circle-icon', iconSize: [50, 50] }) }),  // 인천 (10 증가)
    L.marker([37.4138, 127.5183], { icon: L.divIcon({ className: 'circle-icon', iconSize: [50, 50] }) }),  // 경기 (10 증가)
    L.marker([36.5184, 126.8000], { icon: L.divIcon({ className: 'circle-icon', iconSize: [60, 60] }) }),  // 충남 (10 증가)
    L.marker([36.6358, 127.4917], { icon: L.divIcon({ className: 'circle-icon', iconSize: [60, 60] }) }),  // 충북 (10 증가)
    L.marker([36.3504, 127.3845], { icon: L.divIcon({ className: 'circle-icon', iconSize: [35, 35] }) }),  // 대전 (10 증가)
    L.marker([35.7175, 127.1530], { icon: L.divIcon({ className: 'circle-icon', iconSize: [70, 70] }) }),  // 전북 (10 증가)
    L.marker([35.2599, 128.6645], { icon: L.divIcon({ className: 'circle-icon', iconSize: [80, 80] }) }),  // 경남 (10 증가)
    L.marker([37.8228, 128.1555], { icon: L.divIcon({ className: 'circle-icon', iconSize: [90, 90] }) }),  // 강원 (10 증가)
    L.marker([36.4919, 128.8889], { icon: L.divIcon({ className: 'circle-icon', iconSize: [100, 100] }) }),  // 경북 (10 증가)
    L.marker([34.8161, 126.4630], { icon: L.divIcon({ className: 'circle-icon', iconSize: [110, 110] }) })  // 전남 (10 증가)
];

const markers2 = [
    L.marker([37.5665, 126.9780], { icon: L.divIcon({ className: 'circle-icon2', iconSize: [5, 5] }) }),  // 서울 (15 감소)
    L.marker([36.4800, 127.2890], { icon: L.divIcon({ className: 'circle-icon2', iconSize: [15, 15] }) }),  // 세종 (15 감소)
    L.marker([35.1595, 126.8526], { icon: L.divIcon({ className: 'circle-icon2', iconSize: [20, 20] }) }),  // 광주 (15 감소)
    L.marker([35.5394, 129.3114], { icon: L.divIcon({ className: 'circle-icon2', iconSize: [25, 25] }) }),  // 울산 (15 감소)
    L.marker([35.1796, 129.0756], { icon: L.divIcon({ className: 'circle-icon2', iconSize: [35, 35] }) }),  // 부산 (15 감소)
    L.marker([35.8714, 128.6014], { icon: L.divIcon({ className: 'circle-icon2', iconSize: [40, 40] }) }),  // 대구 (15 감소)
    L.marker([33.4996, 126.5312], { icon: L.divIcon({ className: 'circle-icon2', iconSize: [30, 30] }) }),  // 제주 (15 감소)
    L.marker([37.4563, 126.7052], { icon: L.divIcon({ className: 'circle-icon2', iconSize: [45, 45] }) }),  // 인천 (15 감소)
    L.marker([37.4138, 127.5183], { icon: L.divIcon({ className: 'circle-icon2', iconSize: [50, 50] }) }),  // 경기 (15 감소)
    L.marker([36.5184, 126.8000], { icon: L.divIcon({ className: 'circle-icon2', iconSize: [60, 60] }) }),  // 충남 (15 감소)
    L.marker([36.6358, 127.4917], { icon: L.divIcon({ className: 'circle-icon2', iconSize: [55, 55] }) }),  // 충북 (15 감소)
    L.marker([36.3504, 127.3845], { icon: L.divIcon({ className: 'circle-icon2', iconSize: [10, 10] }) }),  // 대전 (15 감소)
    L.marker([35.7175, 127.1530], { icon: L.divIcon({ className: 'circle-icon2', iconSize: [65, 65] }) }),  // 전북 (15 감소)
    L.marker([35.2599, 128.6645], { icon: L.divIcon({ className: 'circle-icon2', iconSize: [75, 75] }) }),  // 경남 (15 감소)
    L.marker([37.8228, 128.1555], { icon: L.divIcon({ className: 'circle-icon2', iconSize: [70, 70] }) }),  // 강원 (15 감소)
    L.marker([36.4919, 128.8889], { icon: L.divIcon({ className: 'circle-icon2', iconSize: [80, 80] }) }),  // 경북 (15 감소)
    L.marker([34.8161, 126.4630], { icon: L.divIcon({ className: 'circle-icon2', iconSize: [85, 85] }) })  // 전남 (15 감소)
];

// 모든 마커를 지도에 추가하는 함수
function addMarkersToMap(markersArray) {
    markersArray.forEach(marker => marker.addTo(map));
}

// 모든 마커를 지도에서 제거하는 함수
function removeMarkersFromMap(markersArray) {
    markersArray.forEach(marker => marker.remove());
}

// 초기 상태로 markers를 지도에 추가
addMarkersToMap(markers);

// mapbtn1 버튼 클릭 이벤트 (markers 보이기, markers2 숨기기)
document.getElementById('mapbtn1').addEventListener('click', () => {
    removeMarkersFromMap(markers2);  // markers2 숨기기
    addMarkersToMap(markers);  // markers 보이기
});

// mapbtn2 버튼 클릭 이벤트 (markers2 보이기, markers 숨기기)
document.getElementById('mapbtn2').addEventListener('click', () => {
    removeMarkersFromMap(markers);  // markers 숨기기
    addMarkersToMap(markers2);  // markers2 보이기
});


function toggleImage(imageId) {
    var img = document.getElementById(imageId);
    if (img.style.display === 'none' || img.style.display === '') {
        img.style.display = 'inline-block'; // 이미지를 표시
    } else {
        img.style.display = 'none'; // 이미지를 숨김
    }
}

// 현재 보여지고 있는 이미지의 인덱스
let currentIndex = 0;

// 모든 이미지를 배열로 가져오기
const images = document.querySelectorAll('#image-container img');

// 왼쪽 화살표 클릭 시 이전 이미지로 이동
document.getElementById('left-arrow').addEventListener('click', function() {
    images[currentIndex].style.display = 'none'; // 현재 이미지 숨김
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1; // 인덱스 감소, 처음으로 돌아감
    images[currentIndex].style.display = 'block'; // 새로운 이미지 표시
});

// 오른쪽 화살표 클릭 시 다음 이미지로 이동
document.getElementById('right-arrow').addEventListener('click', function() {
    images[currentIndex].style.display = 'none'; // 현재 이미지 숨김
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1; // 인덱스 증가, 마지막에서 처음으로 돌아감
    images[currentIndex].style.display = 'block'; // 새로운 이미지 표시
});
// 스크롤 진행률에 따른 progress 바 조정
window.addEventListener('scroll', function () {
    var scrollTop = window.scrollY; // 현재 스크롤 위치
    var docHeight = document.body.scrollHeight; // 문서 전체 높이
    var winHeight = window.innerHeight; // 창 높이
    var scrollPercent = scrollTop / (docHeight - winHeight); // 스크롤 비율 계산

    // progress 바의 높이를 스크롤 비율에 따라 변경
    var progressHeight = scrollPercent * 100; // 스크롤 비율을 퍼센트로 변환
    var progressBar = document.querySelector('.progress');
    progressBar.style.height = `${scrollPercent * 100}%`; // 바의 높이를 스크롤 비율에 맞춰 조정
});

// iframe의 높이 조정
!function () {
    "use strict";
    window.addEventListener("message", function (a) {
        if (void 0 !== a.data["datawrapper-height"]) {
            var e = document.querySelectorAll("iframe");
            for (var t in a.data["datawrapper-height"]) {
                for (var r = 0; r < e.length; r++) {
                    if (e[r].contentWindow === a.source) {
                        var i = a.data["datawrapper-height"][t] + "px";
                        e[r].style.height = i;
                    }
                }
            }
        }
    });
}();

document.addEventListener("DOMContentLoaded", function () {
    const cumulativeChartElement = document.getElementById('cumulativeChart');
    const schoolChartElement = document.getElementById('schoolChart');
    const reasonChartElement = document.getElementById('reasonChart');

    // 차트 애니메이션을 실행할 함수들
    function startCumulativeChartAnimation() {
        let cumulativeIndex = 0;
        function addCumulativeDataPoint() {
            if (cumulativeIndex < cumulativeData.length) {
                cumulativeChart.data.datasets[0].data.push(cumulativeData[cumulativeIndex]);
                cumulativeChart.update();
                cumulativeIndex++;
                setTimeout(addCumulativeDataPoint, 35); // 속도 조정
            }
        }
        addCumulativeDataPoint();
    }

    function startSchoolChartAnimation() {
        let schoolIndex = 0;
        function addSchoolDataPoint() {
            if (schoolIndex < schoolData.length) {
                schoolChart.data.datasets[0].data.push(schoolData[schoolIndex]);
                schoolChart.update();
                schoolIndex++;
                setTimeout(addSchoolDataPoint, 35); // 속도 조정
            }
        }
        addSchoolDataPoint();
    }

    function startReasonChartAnimation() {
        reasonChart.data.datasets[0].data = [156, 101, 47, 20, 18, 16, 9];
        reasonChart.options.animation.duration = 2000; // 속도 조정
        reasonChart.update();
    }

    // 차트를 초기 상태로 복원하는 함수들
    function resetCumulativeChart() {
        cumulativeChart.data.datasets[0].data = [];
        cumulativeChart.update();
    }

    function resetSchoolChart() {
        schoolChart.data.datasets[0].data = [];
        schoolChart.update();
    }

    function resetReasonChart() {
        reasonChart.data.datasets[0].data = [0, 0, 0, 0, 0, 0, 0]; // 애니메이션 전으로 초기화
        reasonChart.update();
    }

    // IntersectionObserver 설정
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target === cumulativeChartElement) {
                    startCumulativeChartAnimation();
                } else if (entry.target === schoolChartElement) {
                    startSchoolChartAnimation();
                } else if (entry.target === reasonChartElement) {
                    startReasonChartAnimation();
                }
            } else {
                if (entry.target === cumulativeChartElement) {
                    resetCumulativeChart();
                } else if (entry.target === schoolChartElement) {
                    resetSchoolChart();
                } else if (entry.target === reasonChartElement) {
                    resetReasonChart();
                }
            }
        });
    }, {
        threshold: 1.0 // 100% 이상 보일 때 애니메이션 시작
    });

    observer.observe(cumulativeChartElement);
    observer.observe(schoolChartElement);
    observer.observe(reasonChartElement);
});


// 첫 번째 차트: 누적 선 그래프 애니메이션 차트
const cumulativeLabels = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
const cumulativeData = [3584, 3617, 3660, 3718, 3766, 3819, 3852, 3876, 3901, 3923];
const cumulativeCtx = document.getElementById('cumulativeChart').getContext('2d');
const cumulativeChart = new Chart(cumulativeCtx, {
    type: 'line',
    data: {
        labels: cumulativeLabels,
        datasets: [{
            label: '폐교 수',
            data: [], 
            borderColor: '#5d864c',
            borderWidth: 3,
            fill: true,
            backgroundColor: 'rgba(93, 134, 76, 0.4)', 
            pointRadius: 0, 
        }]
    },
    options: {
        animation: false, 
        scales: {
            x: {
                title: {
                    display: true,
                    text: '연도',
                    color: '#fff'  // X축 제목 색상
                },
                ticks: {
                    color: '#fff'  // X축 레이블 색상
                },
                grid: {
                    display: false 
                }
            },
            y: {
                title: {
                    display: true,
                    text: '값',
                    color: '#fff'  // Y축 제목 색상
                },
                ticks: {
                    color: '#fff'  // Y축 레이블 색상
                },
                beginAtZero: false,
                min: 3550,
                max: 3950, 
                grid: {
                    drawBorder: true, 
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#fff'  // 레전드 텍스트 색상
                }
            }
        }
    }
});

// 두 번째 차트: 학교 수 애니메이션 차트
const schoolLabels = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
const schoolData = [2023, 2031, 2056, 2044, 2039, 2061, 2156, 2136, 2171, 2224];
const schoolCtx = document.getElementById('schoolChart').getContext('2d');
const schoolChart = new Chart(schoolCtx, {
    type: 'line',
    data: {
        labels: schoolLabels,
        datasets: [{
            label: '작은학교 수',
            data: [], 
            borderColor: '#5d864c',
            borderWidth: 3,
            fill: false,
            pointRadius: 0,
        }]
    },
    options: {
        animation: false, 
        scales: {
            x: {
                title: {
                    display: true,
                    text: '연도',
                    color: '#fff'  // X축 제목 색상
                },
                ticks: {
                    color: '#fff'  // X축 레이블 색상
                },
                grid: {
                    display: false 
                }
            },
            y: {
                title: {
                    display: true,
                    text: '작은학교 수',
                    color: '#fff'  // Y축 제목 색상
                },
                ticks: {
                    color: '#fff'  // Y축 레이블 색상
                },
                beginAtZero: false,
                min: 2000,
                max: 2250, 
                grid: {
                    drawBorder: true, 
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#fff'  // 레전드 텍스트 색상
                }
            }
        }
    }
});

// 세 번째 차트: 미활용 사유에 대한 막대 그래프
const reasonCtx = document.getElementById('reasonChart').getContext('2d');
const reasonChart = new Chart(reasonCtx, {
    type: 'bar',
    data: {
        labels: ['구체적 활용 계획 없음', '외부활용예정', '지리적요건', '기타', '무단점유', '자체활용예정', '여건불충족'],
        datasets: [{
            label: '미활용 사유',
            data: [156, 101, 47, 20, 18, 16, 9],
            backgroundColor: '#ff725b',
            borderWidth: 1
        }]
    },
    options: {
        animation: {
            duration: 8000
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: '사유',
                    color: '#fff'  // X축 제목 색상
                },
                ticks: {
                    color: '#fff'  // X축 레이블 색상
                }
            },
            y: {
                title: {
                    display: true,
                    text: '값',
                    color:'#fff'
                },
                ticks: {
                    color: '#fff'  // Y축 레이블(값) 색상 흰색으로 설정
                },
                beginAtZero: true,
                min: 0,
                max: 160,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'  // Y축 그리드 라인 색상 (흰색, 투명도 적용)
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#fff'  // 레전드 텍스트 색상 흰색으로 설정
                }
            },
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null, // viewport 기준
        threshold: 0.8 // 80% 보일 때 트리거
    };

    const iframeContainers = document.querySelectorAll('.iframe-container');
    const pieCharts = document.querySelectorAll('iframe[aria-label="Pie Chart"]');
    const columnCharts = document.querySelectorAll('iframe[aria-label="Column Chart"]');
    const lastChartContainer = document.getElementById('eight'); // 마지막 차트 컨테이너

    iframeContainers.forEach(container => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    container.style.transition = "opacity 1s ease-in-out";
                    container.style.opacity = 1;
                }
            });
        }, observerOptions);

        container.style.opacity = 0;
        observer.observe(container);
    });

    pieCharts.forEach((pieChart, index) => {
        const columnChart = columnCharts[index];
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    pieChart.style.transition = "opacity 1s ease-in-out";
                    columnChart.style.transition = "opacity 1s ease-in-out";
                    pieChart.style.opacity = 0; // 도넛 차트 숨기기
                    columnChart.style.opacity = 1; // 칼럼 차트 나타내기
                }
            });
        }, observerOptions);

        columnChart.style.opacity = 0;
        observer.observe(pieChart);
    });

    // 마지막 차트 컨테이너가 화면에서 사라질 때 애니메이션 초기화
    const lastChartObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                // 애니메이션 초기화
                pieCharts.forEach((pieChart, index) => {
                    pieChart.style.transition = "none";
                    columnCharts[index].style.transition = "none";
                    pieChart.style.opacity = 1;
                    columnCharts[index].style.opacity = 0;
                });
            }
        });
    }, {
        root: null, // viewport 기준
        threshold: 0 // 화면에서 사라지면 트리거
    });

    lastChartObserver.observe(lastChartContainer);
});

document.addEventListener('DOMContentLoaded', function() {
    const icon1 = document.getElementById('icon1');
    const icon2 = document.getElementById('icon2');

    const observerOptions = {
        root: null, // viewport 기준
        threshold: 0.8 // 80% 보일 때 트리거
    };

    const observer1 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                icon1.style.transition = "opacity 1s ease-in-out";
                icon1.style.opacity = 1;
            }
        });
    }, observerOptions);

    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                icon2.style.transition = "opacity 1s ease-in-out";
                icon2.style.opacity = 1;
            }
        });
    }, observerOptions);

    // 초기 상태에서 icon을 숨김
    icon1.style.opacity = 0;
    icon2.style.opacity = 0;

    // 아이콘이 80% 보일 때 트리거되도록 관찰자 연결
    observer1.observe(icon1);
    observer2.observe(icon2);
});

document.addEventListener('DOMContentLoaded', function() {
    const tree = document.querySelector('.tree');
    const pieCharts = document.querySelectorAll('iframe[aria-label="Pie Chart"]');
    const columnCharts = document.querySelectorAll('iframe[aria-label="Column Chart"]');
    const icons = document.querySelectorAll('.icon');

    const observerOptions = {
        root: null, // viewport 기준
        threshold: 0.3 // 30% 이상 보이지 않으면 트리거
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                // tree 요소가 30% 이상 보이지 않을 때 초기화
                pieCharts.forEach(pieChart => {
                    pieChart.style.transition = "none";
                    pieChart.style.opacity = 1; // 파이차트 다시 보이게
                });

                columnCharts.forEach(columnChart => {
                    columnChart.style.transition = "none";
                    columnChart.style.opacity = 0; // 칼럼차트 숨기기
                });

                icons.forEach(icon => {
                    icon.style.transition = "none";
                    icon.style.opacity = 0; // 아이콘 숨기기
                });
            }
        });
    }, observerOptions);

    // tree 요소 관찰
    observer.observe(tree);
});

document.addEventListener('DOMContentLoaded', function() {
    const marks = document.querySelectorAll('.mark'); // 모든 .mark 요소 선택

    const observerOptions = {
        root: null,
        threshold: [0.4, 0.8] // 40%와 80%를 기준으로 설정
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.4) {
                entry.target.classList.add('visible');
            } else if (entry.intersectionRatio < 0.8) {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    marks.forEach(mark => observer.observe(mark)); // 각 .mark 요소에 대해 observer 적용
});


