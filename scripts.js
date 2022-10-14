const params = new URLSearchParams(location.search);
const image = params.get('image') ?? "https://lh3.googleusercontent.com/fife/AAbDypD1DDmyQefbXqk1W_fjw1z9EwlySPir3xrzjQjyBh-9up0lZnc6O2GuYv5rNt5UEk3OR0RbFhXRXomCLKe5rZtmPQNxdE-vd52o42sirzmVNpTQvUsBaj06_RYUVp2LF48FiH538_rvvN8oQ_YFN62gMMeAKKrp-iePbIQAiGoCjacBI1Xrs7V7pEtoucX-FlBlbwNk3SZBVHIZ6ybhc-pKyxv-t7d-_2m6habLDxtICHirbPaqw9jqT28SuxjG97QD7HIW-JGHyO1RUt3EpMAVDiGDBXnk91wwoJrc8lNI6P0SaG3kYHK6rupU3Ejj5NeufrM7rwEkO1uYU1fKCUdsZopH0948gw3bRUOoErd-Y531x0ec7xmQM6c5oMNqLEq38fQfPZoLhm7ADAfRpjYBc8RGX86JsBrC2Sot8Bxbb2-PAdhvrR-L2__hzgjip8xQUyWC3sPtYX2Zr3WERUSYTKTPrBjaUX7o4kjGZ0DphD1E_RAefkGOaKvjkGpqYphKy52tAbnUgIvy5-DKM2LFBElljMOE6HQHhC4os1t-82VsB8g8ePvJXhHQH7u36lU-7P262mucU4yclRUvKhKQ1zu6-yal4O_-xeSwbf6rpJqpjUPcvKvaSbwHF6e9zc-4n2xIIcpovTe-HIEKJq9ERO3YT8NKUCHEpDkq0JeNRT8a_AYy35b-rcPGBVQt4vr5N3hMJWg00p57njyKVH7fAu73J-rA9bpVQBWHAP8k0Z3KafAWHnAIHhJCeWh1mwapebBXPeGsuMSjrS-dS78PV8Np4vjuv2VO0-078DwAycJi7pXoSkZM430jkkc57Wcp3zDzVoVZANMLlTZVjpB8vpNl0vxxOTreRpWe7RKdI0SZg3DvT_770p_WbF2JRx_h8o3yHzHawYjPtI4MQnE96zXF6FZ8FI2s4SsVrDHhrpLCexqGMBjzk_9znqR5ka3JL7BtrUrviSWypT8s_vmEyz08eC7VdkaydnoI3utpx-qyEkGEzph-J-d-vE5o-9hMDZu6z3o0BQpG0URlgc3oBiGe0j3Mq-qJRTxXFwPDAiCnNovzfVr1aB2xyQO9y6EFrivSGsds85Kw4UgrJWWm1yQ5UR6JHg5f4mfDzG6-xoLYGEGXZsUPcFcTxzWcNb9u8pFwY5gz56ItvHBpbbJl-CSixUxbjVwTEyokdY2pu1c5kaMgejv-An_dhBMEHP29vQXIco3iV5RPFm-qd-KnR6R3DlTrmtyfscv1ORX3XueqjWhDNbOjSfaN7zvqsT3yEhKJf5P4XOCrG5qkAJWed8meNeQ8Sw0RXHkcq9EpNazUrKzAoYosBakuUpF_KDan36zi2KW694_8wocHTm6JeWMrAu7Kla_JRbfH9tpBa9Di6JjIq2fVtE4elT745wjm8sBMjeiKHl6DCckumJB_B-pdNXKMmLc_jMyZZiPAEnNcCoTZksVydZLR6ednStYA9ifYbTTSdWsgXCcYc4AZoJf_KqHXeNvvoCqtA2ZXjOi547hKQabM_fDG6uqn2G_EbbWZluSv-H3-pw5y=w3220-h1900";
var seconds = parseInt(params.get('seconds') ?? 60);
document.body.style.backgroundImage = `url(${image})`;

function format(seconds) {
  return (
    Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0') +
    ':' +
    Math.floor(seconds % 60)
      .toString()
      .padStart(2, '0')
  );
}

function countdown() {
  seconds -= 1;
  if (seconds == 0) {
    document.getElementById('black').classList.add('done');
  }
  document.getElementById('timer').innerHTML = format(seconds);
}

setInterval(countdown, 1000);
