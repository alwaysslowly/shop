import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CategoryList() {

    const[categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        //fetch('/api/categories')
        //         ↓
        // 브라우저가 5173에 요청  (지금 접속한 곳이니까)
        //         ↓
        // Vite 프록시가 가로챔  (/api로 시작하니까)
        //         ↓
        // 8080의 스프링에 전달
        //         ↓
        // @RequestMapping("/api/categories") 붙은 컨트롤러가 받음
        fetch('/api/categories')
        .then((res) => {
            if (!res.ok) throw new Error('응답 오류: ' + res.status);
            return res.json();
        })
        .then((data) => setCategories(data))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false))
    }, []);
    
    
    if (loading) return <p>로딩 중...</p>;
    if (error) return <p>오류: {error}</p>;

    return (
        <div style={{ padding: 24 }}>
            <h1>카테고리 목록</h1>
            <ul>
                {categories.map((c) => (
                   <li key={c.ctgryNo}>
                    <Link to={`/categories/${c.ctgryNo}`}>{c.ctgryNm}</Link>
                </li>
                ))}
            </ul>
        </div>
    );




}

export default CategoryList;