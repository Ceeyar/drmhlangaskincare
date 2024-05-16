import { Route, Routes } from 'react-router-dom';
import { Home, About, Treatment, Contact, Appointment } from 'views/Index';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/treatment" element={<Treatment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointment" element={<Appointment />} />
        </Routes>
    );
};

export default AppRoutes;
