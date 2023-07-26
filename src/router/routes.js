//example routes file
import Home from '@/views/Home';
import Form from '@/views/Form';
import Details from '@/views/Details';
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
    {
        path: '/add/:id',
        name: 'Update',
        component: Form
    },
    {
        path: '/details/:id',
        name: 'Details',
        component: Details
    },
];
export default routes