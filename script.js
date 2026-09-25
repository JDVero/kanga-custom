async function loadSharedContent() {

    const sharedContent = [
        ['[data-include="header"]', 'header.html'],
        ['[data-include="footer"]', 'footer.html']
    ];


    await Promise.all(
        sharedContent.map(async ([selector, file]) => {

            const placeholder =
                document.querySelector(selector);

            if (!placeholder) {
                return;
            }


            const response =
                await fetch(file);


            if (!response.ok) {
                throw new Error(
                    `Unable to load ${file}`
                );
            }


            placeholder.outerHTML =
                await response.text();

        })
    );

}



function initializeForms() {

    /*
     * Find every FormSubmit form on the website.
     */
    const forms =
        document.querySelectorAll(
            'form[action*="formsubmit.co"]'
        );


    /*
     * Find all success modals.
     */
    const modals =
        document.querySelectorAll(
            '#quote-modal, #contact-modal'
        );



    /*
     * Handle form submissions.
     */

    forms.forEach((form) => {

        form.addEventListener(
            'submit',
            async (event) => {

                event.preventDefault();


                const submitButton =
                    form.querySelector(
                        'button[type="submit"]'
                    );


                const subjectInput =
                    form.querySelector(
                        'input[name="_subject"]'
                    );


                const name =
                    form.elements
                        .namedItem('name')
                        ?.value
                        .trim();


                const formType =
                    subjectInput?.value.replace(
                        ' - Kanga Custom Products',
                        ''
                    ) || 'New inquiry';



                /*
                 * Add visitor name and timestamp
                 * to the email subject.
                 */

                if (subjectInput) {

                    subjectInput.value =
                        `${formType} - ${name || 'Visitor'} - ${Date.now()}`;

                }



                /*
                 * Prevent multiple submissions
                 * while the request is processing.
                 */

                if (submitButton) {
                    submitButton.disabled = true;
                }



                try {

                    /*
                     * Convert the normal FormSubmit URL
                     * into the AJAX endpoint.
                     */

                    const ajaxAction =
                        form.action.replace(
                            'formsubmit.co/',
                            'formsubmit.co/ajax/'
                        );



                    /*
                     * Send the form.
                     */

                    const response =
                        await fetch(
                            ajaxAction,
                            {
                                method: 'POST',

                                body: JSON.stringify(
                                    Object.fromEntries(
                                        new FormData(form)
                                    )
                                ),

                                headers: {
                                    Accept:
                                        'application/json',

                                    'Content-Type':
                                        'application/json'
                                }
                            }
                        );



                    if (!response.ok) {
                        throw new Error(
                            'Form submission failed'
                        );
                    }



                    /*
                     * Clear the form after
                     * successful submission.
                     */

                    form.reset();



                    /*
                     * Determine which modal
                     * belongs to the form.
                     */

                    let modal;


                    if (
                        form.id === 'contact-form'
                    ) {

                        modal =
                            document.querySelector(
                                '#contact-modal'
                            );

                    } else {

                        modal =
                            document.querySelector(
                                '#quote-modal'
                            );

                    }



                    /*
                     * Show the success modal.
                     */

                    if (modal) {

                        modal.hidden = false;

                        modal.setAttribute(
                            'aria-hidden',
                            'false'
                        );


                        const closeButton =
                            modal.querySelector(
                                '.modal-close, .modal-button'
                            );


                        closeButton?.focus();

                    }

                }


                catch (error) {

                    console.error(
                        'Form submission error:',
                        error
                    );


                    window.alert(
                        'Your message could not be sent. Please try again.'
                    );

                }


                finally {

                    if (submitButton) {
                        submitButton.disabled = false;
                    }

                }

            }
        );

    });



    /*
     * Set up all success modals.
     */

    modals.forEach((modal) => {

        const closeButton =
            modal.querySelector(
                '.modal-close, .modal-button'
            );



        function closeModal() {

            modal.hidden = true;

            modal.setAttribute(
                'aria-hidden',
                'true'
            );

        }



        /*
         * Close button.
         */

        closeButton?.addEventListener(
            'click',
            closeModal
        );



        /*
         * Close when clicking
         * outside the modal box.
         */

        modal.addEventListener(
            'click',
            (event) => {

                if (
                    event.target === modal
                ) {

                    closeModal();

                }

            }
        );



        /*
         * Close with Escape.
         */

        document.addEventListener(
            'keydown',
            (event) => {

                if (
                    event.key === 'Escape' &&
                    !modal.hidden
                ) {

                    closeModal();

                }

            }
        );

    });

}



loadSharedContent()

    .then(initializeForms)

    .catch(
        (error) =>
            console.error(error)
    );