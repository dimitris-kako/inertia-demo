import {createApp, h} from 'vue'
import {createInertiaApp, Link, Head} from '@inertiajs/inertia-vue3'
import {InertiaProgress} from "@inertiajs/progress";
import Layout from "./Shared/Layout";

createInertiaApp({
        resolve: async name => {
            let page = (await import(`./Pages/${name}`)).default;

            page.layout ??= Layout;

            page.Layout = Layout;

            return page
        },
        setup({el, App, props, plugin}) {
            createApp({render: () => h(App, props)})
                .use(plugin)
                .component("Link", Link)
                .component("Head", Head)
                .mount(el)
        },
        title: title => 'My App | ' + title,
    }
);

InertiaProgress.init({
    delay: 500,
    showSpinner: true,
});
