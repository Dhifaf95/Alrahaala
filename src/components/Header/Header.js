// Header.js
import React, { useState, useEffect } from 'react'; // استيراد React مع useState و useEffect
import './header.css'; // استيراد ملف التنسيقات الخاص بالرأس
import { Link } from 'react-router-dom'; // استيراد Link للتنقل بين الصفحات
import { Link as ScrollLink } from 'react-scroll'; // استيراد ScrollLink للتنقل السلس داخل نفس الصفحة
import logo from './Untitled_logo_1_free-file__4_-removebg-preview.png'; // استيراد شعار الموقع
import Button from '../Button/Button'; // استيراد مكون الزر
import Login from '../Login/Login'; // استيراد مكون تسجيل الدخول
import Iconpersonal from '../iconpersonal/Iconpersonal'
const Header = () => {
    // حالات المكون
    const [isLoginVisible, setLoginVisible] = useState(false); // لتحديد إذا كانت نافذة تسجيل الدخول مرئية
    const [isLoggedIn, setLoggedIn] = useState(false); // لتحديد إذا كان المستخدم قد سجل الدخول
    const [username, setUsername] = useState(null); // اسم المستخدم

    // عند تحميل المكون، التحقق من وجود بيانات تسجيل الدخول
    useEffect(() => {
        const storedToken = localStorage.getItem('token'); // الحصول على التوكن
        const storedUsername = localStorage.getItem('username'); // الحصول على اسم المستخدم
        if (storedToken && storedUsername) {
            setLoggedIn(true); // تحديث حالة تسجيل الدخول
            setUsername(storedUsername); // تحديث اسم المستخدم
        }
    }, []);

    // دالة تنفيذ عند نجاح تسجيل الدخول
    const handleLoginSuccess = (user, token) => {
        localStorage.setItem('username', user); // تخزين اسم المستخدم
        localStorage.setItem('token', token); // تخزين التوكن
        setLoggedIn(true); // تحديث حالة تسجيل الدخول
        setUsername(user); // تحديث اسم المستخدم
        setLoginVisible(false); // إخفاء نافذة تسجيل الدخول
    };

    // دالة تسجيل الخروج
    const handleLogout = () => {
        localStorage.removeItem('username'); // إزالة اسم المستخدم
        localStorage.removeItem('token'); // إزالة التوكن
        setLoggedIn(false); // تحديث حالة تسجيل الدخول
        setUsername(null); // إعادة اسم المستخدم إلى null
    };

    return (
        <header className="header"> {/* العنصر الرئيسي للرأس */}
            {/* قسم الشعار */}
            <div className="logo">
                <img src={logo} alt="Logo" className="logo-img" /> {/* عرض الشعار */}
            </div>

            {/* قسم الروابط */}
            <nav className="nav-links">
                <ul className="list">
                    <li><Link to="/">Home</Link></li> {/* رابط الصفحة الرئيسية */}
                    <li>
                        <ScrollLink to="Attractions" smooth={true} duration={500}>
                            Attractions {/* رابط قسم المعالم السياحية */}
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="SearchBar" smooth={true} duration={500}>
                            Services {/* رابط قسم الخدمات */}
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="About" smooth={true} duration={500}>
                            About Us {/* رابط قسم من نحن */}
                        </ScrollLink>
                    </li>
                </ul>
            </nav>

            {/* زر تسجيل الدخول أو معلومات المستخدم */}
            <div className="login-container">
                {isLoggedIn ? (
                    // إذا كان المستخدم قد سجل الدخول
                    <div className="profile-section">
                        <Iconpersonal
                        username={username} // تمرير اسم المستخدم
                        onLogout={handleLogout} // تمرير دالة تسجيل الخروج
                   />
                    </div>
                ) : (
                    // إذا لم يكن المستخدم قد سجل الدخول
                    <Button
                        onClick={() => setLoginVisible(true)} // إظهار نافذة تسجيل الدخول عند الضغط
                        label="Login" // نص الزر
                        width="100px"
                        height="40px"
                        className="buttonD"
                        fontSize="20px"
                    />
                )}
            </div>

            {/* نافذة تسجيل الدخول */}
            {isLoginVisible && (
                <div className="login-modal">
                    <Login 
                        onClose={() => setLoginVisible(false)} // تمرير دالة إغلاق النافذة
                        onLoginSuccess={(user, token) => handleLoginSuccess(user, token)} // تمرير بيانات تسجيل الدخول
                    />
                </div>
            )}
        </header>
    );
};

export default Header;
