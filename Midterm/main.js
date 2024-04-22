var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

// 페이지를 새로 고칠 때마다 호출되는 함수
function redraw() {
    // 캔버스 초기화
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 중심 좌표 및 크기 랜덤하게 설정
    var centerX = Math.random() * canvas.width;
    var centerY = Math.random() * canvas.height;
    var radius = 50;

    // 좌표계 그리기
    drawCoordinateSystem(ctx);
    drawHeart(ctx);
    drawStar(centerX, centerY, radius, 5, radius / 2);
}

// 좌표계 그리기
function drawCoordinateSystem(ctx) {
    // X 축 그리기
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();

    // Y 축 그리기
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
}

// 하트 그리기
function drawHeart(ctx) {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2 - 50); // 시작점: 하트의 윗 부분 중앙
    ctx.bezierCurveTo(
        canvas.width / 2 + 50, canvas.height / 2 - 80,
        canvas.width / 2 + 110, canvas.height / 2 - 30,
        canvas.width / 2, canvas.height / 2 + 40
    ); // 상단 오른쪽 곡선
    ctx.bezierCurveTo(
        canvas.width / 2 - 110, canvas.height / 2 - 30,
        canvas.width / 2 - 50, canvas.height / 2 - 80,
        canvas.width / 2, canvas.height / 2 - 50
    ); // 상단 왼쪽 곡선
    ctx.fillStyle = "rgb(192, 0, 0)"; // 채우기 색상 설정
    ctx.fill(); // 하트 채우기
}

// 별 그리기 함수
function drawStar(x, y, radius, numPoints, innerRadius) {
    var rot = (Math.PI / 2) * 3;
    var xCenter = x;
    var yCenter = y;
    var step = (Math.PI * 2) / numPoints;
  
    ctx.beginPath();
    ctx.moveTo(xCenter + radius * Math.cos(rot), yCenter + radius * Math.sin(rot));
    for (var i = 0; i < numPoints; i++) {
        rot += step;
        ctx.lineTo(
            xCenter + innerRadius * Math.cos(rot),
            yCenter + innerRadius * Math.sin(rot)
        );
        rot += step;
        ctx.lineTo(
            xCenter + radius * Math.cos(rot),
            yCenter + radius * Math.sin(rot)
        );
    }
    ctx.closePath();
    ctx.strokeStyle = '#FFD700'; // 별의 선 색상
    ctx.lineWidth = 5; // 별의 선 두께
    ctx.stroke();
  
    // 별을 노란색으로 채우기
    ctx.fillStyle = '#FFFF00'; // 노란색
    ctx.fill();
}
// 페이지 로드 시 최초 그리기
redraw();