

//文章时间的格式化。
dayjs.locale('zh-cn')
dayjs.extend(window.dayjs_plugin_relativeTime)
window.onload = function () {
  var crTimes = document.querySelectorAll(".cr-time");
  var upTimes = document.querySelectorAll(".up-time");

  for (var i = 0; i < crTimes.length; i++) {
    var crTime = crTimes[i];
    crTime.textContent = dayjs(crTime.textContent).fromNow();
  }

  for (var i = 0; i < upTimes.length; i++) {
    var upTime = upTimes[i];
    upTime.textContent = dayjs(upTime.textContent).fromNow();
  }


};

/**
 * 按钮点击后，滚动将以平滑的动画方式进行。
 */
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// 获取返回顶部按钮的元素
const topButton = document.getElementById("topButton");

// 监听页面滚动事件
window.onscroll = function () {
  // 获取页面滚动距离
  const scrollY = window.scrollY;


  // 如果页面没有滚动或者滚动条还在页面的顶端，隐藏按钮
  if (scrollY < 500) {
    topButton.classList.remove("block");
    topButton.classList.add("hidden");
  } else {
    topButton.classList.remove("hidden");
    topButton.classList.add("block");
  }
};