# coding: utf-8
# -*- mode: ruby -*-
# vi: set ft=ruby :
Vagrant.configure("2") do |config|

  ## Setting azure machines

  ### Name of the locally installed/hashicorp's vagrant box that will be used
  config.vm.box = "azure"

  ### Locate ssh key
  config.ssh.private_key_path = '~/.ssh/id_rsa'

  config.vm.provider :azure do |azure, override|
    ### Setting VM name, instead of using a random one
    azure.vm_name = "duckcraft"

    ### Setting resource group (it will avoid creating a new random one for every deployment. You may comment this line if you are creating many in a short lapse of time so that you won't have to wait until it's removed in order to deploy again)
    #azure.resource_group_name = "duckpiler_resource_group"

    ### Choose a suitable server to host your VM according to your location
    azure.location = "westeurope"

    ### Expose suitable port
    azure.tcp_endpoints = "25565"
    
    ### Set up the environment vars (suscription details) to allow proper creation of the VM's and its resources
    azure.tenant_id = ENV['AZURE_TENANT_ID']
    azure.client_id = ENV['AZURE_CLIENT_ID']
    azure.client_secret = ENV['AZURE_CLIENT_SECRET']
    azure.subscription_id = ENV['AZURE_SUBSCRIPTION_ID']
  end

end
