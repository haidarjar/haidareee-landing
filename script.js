function goToPhase(targetPhaseId) {
    const phases = document.querySelectorAll('.phase-content');

    phases.forEach(phase => {
        if (!phase.classList.contains('hide-phase') && phase.id !== targetPhaseId) {
            phase.classList.remove('fade-in');
            phase.classList.add('fade-out');

            setTimeout(() => {
                phase.classList.add('hide-phase');
            }, 300);
        }
    });

    const targetPhase = document.getElementById(targetPhaseId);

    setTimeout(() => {
        targetPhase.classList.remove('hide-phase');

        if (targetPhaseId === 'phase-interest') {
            targetPhase.scrollTop = 0;
        }

        void targetPhase.offsetWidth;

        targetPhase.classList.remove('fade-out');
        targetPhase.classList.add('fade-in');
    }, 350);
}
