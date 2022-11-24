(function () {
    // 获取故障切换部分
    var choseTab = document.getElementsByClassName('choseTab');
    // 获取切换内容部分
    var showTab = document.getElementsByClassName('showTab');

    for(var i=0;i<choseTab.length;i++){
        choseTab[i].setAttribute('index',i);

        choseTab[i].onclick = function() {
            var index=this.getAttribute('index');

            for(var j=0;j<choseTab.length; j++){
                choseTab[j].classList.remove('active');
                choseTab[index].classList.add("active");
            }
            for(var k=0;k<showTab.length;k++){
                showTab[k].style.display = "none";
                showTab[index].style.display = "block";
            }
        }
    }
})();



// 点位部分
(function () {
    var myChart = echarts.init(document.querySelector('.pie'));

    var option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
            {
                name: '老陈学员分布',
                // pie 饼图  
                type: 'pie',
                radius: ['10%', '65%'],
                // 设置水平方向  垂直方法  50% 居中
                center: ['50%', '50%'],
                roseType: 'radius',
                itemStyle: {
                    borderRadius: 5
                },
                label: {
                    fontSize: 10
                },
                labelLine: {
                    length: 4,
                    length2: 8
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '河南' }
                ]
            }
        ]
    };

    myChart.setOption(option);

    window.addEventListener('load', function () {
        myChart.resize();
    });

    window.addEventListener('resize', function () {
        myChart.resize();
    })

})();