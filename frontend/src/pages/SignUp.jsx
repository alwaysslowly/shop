import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [form, setForm] = useState({
        mbrId: '',
        mbrPwd: '',
        mbrNm: '',
        email: '',
        mobileNo: '',
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = () => {
        fetch('/api/members', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        })
            .then(async (res) => {
                const data = await res.json();
                if (!res.ok) throw new Error(data.message);
                return data;
            })
            .then((mbrNo) => {
                alert('가입이 완료되었습니다. 회원번호: ' + mbrNo);
                navigate('/');
            })
            .catch((err) => setMessage(err.message));
    };

    return (
        <div style={{ padding: 24, maxWidth: 400 }}>
            <h1>회원가입</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <input
                    name="mbrId"
                    value={form.mbrId}
                    onChange={handleChange}
                    placeholder="아이디"
                />
                <input
                    name="mbrPwd"
                    type="password"
                    value={form.mbrPwd}
                    onChange={handleChange}
                    placeholder="비밀번호"
                />
                <input
                    name="mbrNm"
                    value={form.mbrNm}
                    onChange={handleChange}
                    placeholder="이름"
                />
                <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="이메일"
                />
                <input
                    name="mobileNo"
                    value={form.mobileNo}
                    onChange={handleChange}
                    placeholder="휴대폰번호"
                />

                <button onClick={handleSubmit}>가입하기</button>

                {message && <p style={{ color: 'red' }}>{message}</p>}
            </div>
        </div>
    );
}

export default SignUp;