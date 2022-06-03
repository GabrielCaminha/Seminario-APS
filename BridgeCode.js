// A "abstração" define a interface para a parte "controle" das
// duas hierarquias de classe. Ela mantém uma referência a um
// objeto da hierarquia de "implementação" e delega todo o
// trabalho real para esse objeto.

class RemoteControl is
    protected field device: Device
    constructor RemoteControl(device: Device) is
        this.device = device
    method togglePower() is
        if (device.isEnabled()) then
            device.disable()
        else
            device.enable()
    method volumeDown() is
        device.setVolume(device.getVolume() - 10)
    method volumeUp() is
        device.setVolume(device.getVolume() + 10)
    method channelDown() is
        device.setChannel(device.getChannel() - 1)
    method channelUp() is
        device.setChannel(device.getChannel() + 1)


// Você pode estender classes a partir dessa hierarquia de
// abstração independentemente das classes de dispositivo.

class AdvancedRemoteControl extends RemoteControl is
    method mute() is
        device.setVolume(0)


// A interface "implementação" declara métodos comuns a todas as
// classes concretas de implementação. Ela não precisa coincidir
// com a interface de abstração. Na verdade, as duas interfaces
// podem ser inteiramente diferentes. Tipicamente a interface de
// implementação fornece apenas operações primitivas, enquanto
// que a abstração define operações de alto nível baseada
// naquelas primitivas.

interface Device is
    method isEnabled()
    method enable()
    method disable()
    method getVolume()
    method setVolume(percent)
    method getChannel()
    method setChannel(channel)


// Todos os dispositivos seguem a mesma interface.
class Tv implements Device is
    // ...

class Radio implements Device is
    // ...


// Em algum lugar no código cliente.
tv = new Tv()
remote = new RemoteControl(tv)
remote.togglePower()

radio = new Radio()
remote = new AdvancedRemoteControl(radio)
