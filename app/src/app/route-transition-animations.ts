import { trigger, transition, style, query, animateChild, animate, group } from '@angular/animations'; 

export const routeTransitionAnimations = trigger('triggerName', [
    transition('work => resume, work => about, resume => work, resume => about, about => work, about => resume', [
        query(':enter, :leave', [
            style({
            })
        ]),
        query(':enter', [style({ opacity: 0 })]),
        query(':leave', animateChild()),
        group([
            query(':enter', [animate('1s ease-in', style({ opacity: 1 }))])
        ]),
        query(':enter', animateChild())
    ])
]);