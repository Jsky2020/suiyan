

// 全站搜索
const blog_url = suiyan.url
const searchInput = document.getElementById('search-input');
const resultList = document.getElementById('result-list');



// 读取JSON文件
fetch(blog_url + 'blog_data.json')
    .then(response => response.json())
    .then(data => {
        // 处理搜索按钮点击事件
        searchInput.addEventListener('input', (e) => {
            // 调用防抖后的showRst函数
            debouncedShowRst(searchInput, data, resultList, blog_url);
            e.preventDefault()
            return false;
        });
    });


function showRst(searchInput, data, resultList, blog_url) {
    const keyword = searchInput.value.trim().toLowerCase();
    const filteredArticles = data.filter(article => {
        return article.title.toLowerCase().includes(keyword);
    });
    // 清空搜索结果列表
    resultList.innerHTML = '';
    // 添加搜索结果到列表中
    if (filteredArticles.length === 0) {
        const li = document.createElement('li');
        li.textContent = '没有搜到相关内容';
        resultList.appendChild(li);
    } else {
        filteredArticles.forEach(article => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = blog_url + article.url + ".html";
            a.target = '_blank';
            a.textContent = article.title;
            li.appendChild(a);
            resultList.appendChild(li);
        });
    }
}


// 防抖函数
function debounce(func, delay) {
    let timeoutId;
  
    return function (...args) {
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  // 应用防抖功能到showRst函数
const debouncedShowRst = debounce(showRst, 500);