//example routes file
import Home from '@/views/Home';
import Form from '@/views/Form';
const routes = [{
        path: '/',
        name: 'Welcome',
        component: Home
    },

    {
        path: '/add',
        name: 'Add',
        component: Form
    },
];
export default routes