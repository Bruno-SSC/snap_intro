com0
    Set up everything (including netlify/gh) and did most of the mobile design. Currently working on the side menu for it.
com1
    Finished the mobile. Not responsive/animated. 
com2
    Created isolated components for reusable components. Also created a service to manage device and sidemenu state with Subjects to update components that might need this data.
com3
    Specifically struggling with how to deal with the modal dropdown in the desktop. Probably same problem I got stuck last attempts.
com4 
    Managed to implement the dropdown modal. Not sure if I like how I did it but it works for now.
com5
    got rid of the ng-container/ng-template approach and focused on ngIf and styling only.
com6
    finally achieved a decently looking arrange of mobile/desktop versions. Now I can focus on the styling for each block in both versions individually while making device-based layout changes solely on one component.
com7
    Implemented a dynamic rendering of the header_nav comp for the desktop version.
com8
    almost finishing the main desktop barebones styling. Very unresponsive and the brand_strip is not properly positioned yet.
com9
    Just recording some progress on the main desktop styling. overal adjusts.
com10
    It's basically finished, only lacks animation and fixing some details. Although, I feel like something is wrong. For instance, the desktop version has a portrait hero while the mobile has a landscape.
    I've switched them because I must work with the right proportions, otherwise the image will either be clipped or generate white space (not cover).
com11
    Just prepared for publishing.
com12
    just change live link on readme.
com13
    Refactored some code, fixed some styling and added animations.
com14
    Rewrited the home styling with grid + possibly a few small changes here and there.
com15
    Improving animations at the sidemenu but got stuck with an annoying bug where once the grow animation of the dropdown container end (or seems like ends) it snaps (grows a little bigger quick).
com16
    fixed a subscription memory leak, added a listener to change device without reloads, fixed the "grow" animation annoying bug and possibly more minor changes.
